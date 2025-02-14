<script>
  import { onMount } from 'svelte';
  import { connectWebSocket } from '$lib/chat.js';

  export let room; // 🔹 ルーム名を親から受け取る

  let file;
  let base64Image = '';
  let messages = [];
  let socket;

  onMount(() => {
    socket = connectWebSocket(room, (message) => {
      if (message.type === 'image') {
        messages = [...messages, { type: 'image', data: message.data }];
      }
    });
  });

  function handleFileUpload(event) {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      base64Image = reader.result;
    };
  }

  function sendImage() {
    if (!base64Image) return;

    const message = {
      type: 'image',
      data: base64Image
    };

    socket.send(JSON.stringify({
      command: 'message',
      identifier: JSON.stringify({ channel: 'RoomChannel', room }),
      data: JSON.stringify(message)
    }));
    
    messages = [...messages, message];
    base64Image = ''; // 送信後にクリア
  }
</script>

<div>
  <input type="file" accept="image/*" on:change={handleFileUpload} />
  <button on:click={sendImage} disabled={!base64Image}>画像送信</button>

  <h3>受信した画像</h3>
  {#each messages as message}
    {#if message.type === 'image'}
      <img src={message.data} alt="Received Image" style="max-width: 300px;" />
    {/if}
  {/each}
</div>
