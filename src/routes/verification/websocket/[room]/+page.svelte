<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { connectWebSocket } from '$lib/chat.js';
  
    let messages = []; // 受信したメッセージを保存
    let inputMessage = '';
    let socket;
    let room = '';
  
    $: room = $page.params.room; // URL からルーム名を取得
  
    onMount(() => {
      socket = connectWebSocket(room, (message) => {
        messages = [...messages, message.text]; // メッセージを追加
      });
    });
  
    function sendMessage() {
      if (!inputMessage.trim()) return;
  
      socket.send(JSON.stringify({
				command: 'message',
				identifier: JSON.stringify({ channel: 'RoomChannel', room }),
				data: JSON.stringify({ action: "speak", text: inputMessage }) // 🔹 action: "speak" を追加
			}));
  
      inputMessage = ''; // 入力欄をリセット
    }
  </script>
  
  <h1>ルーム: {room}</h1>
  <ul>
    {#each messages as message}
      <li>{message}</li>
    {/each}
  </ul>
  
  <input bind:value={inputMessage} placeholder="メッセージを入力">
  <button on:click={sendMessage}>送信</button>
  