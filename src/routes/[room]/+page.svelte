<script>
  import "./style.css";
  import { onMount } from "svelte";
  import { page } from '$app/stores';
  import QRCode from "qrcode";
  import { connectWebSocket } from '$lib/chat.js';
  import { goto } from '$app/navigation';

  let socket;
  let roomId = "";
  let qrCodeUrl = "";
  let players = [];

  function onStartGame() {
    // messageを送信する前にsubscribeしなければいけない
    socket.send(JSON.stringify({
      command: 'subscribe',
      identifier: JSON.stringify({ channel: 'RoomChannel', room: `room_${roomId}`, nickname: localStorage.getItem("nickname") }),
    }));
    socket.send(JSON.stringify({
      command: 'message',
      identifier: JSON.stringify({ channel: 'RoomChannel', room: `room_${roomId}`, nickname: localStorage.getItem("nickname") }),
      data: JSON.stringify({ action: "start_game", nickname: localStorage.getItem("nickname") }) // 🔹 "start_game" を送信
    }));
  }

  onMount(async () => {
    // roomId を取得
    roomId = $page.params.room;

    // QRコードを生成
    const url = window.location.href;
    qrCodeUrl = await QRCode.toDataURL(url);

    // WebSocket 接続
    socket = connectWebSocket(roomId, localStorage.getItem("nickname"), (message) => {
      console.log("message: ", message)
      if (message.type === "text") {
        if (message.data.command === "get_players") {
          console.log("message.data.players:", message.data.players);
          players = [...message.data.players];
        }else if (message.data.command === "start_game") {
          console.log("start_game!");
          goto(`${roomId}/game`);
        }
      }
    });
  });
</script>
  
<h1>WeReal?</h1>

<div class="players">
  {#each players as player}
    <div class="player">
      <img src={player.image} alt={player.nickname} />
      <p>{player.nickname}</p>
    </div>
  {/each}
</div>

<div class="game-description">
  <h2>ゲーム説明</h2>
  <p>写真人狼です</p>
</div>

<div class="qr-code flex justify-center">
  {#if qrCodeUrl}
  <div>
    <img src={qrCodeUrl} alt="QR Code" />
  </div>
  {:else}
    <p>QRコードを生成中...</p>
  {/if}
</div>

<p class="room-id">room: {roomId}</p>

<div class="buttons">
  <div class="button">🔗</div>
  <div class="button" on:click={onStartGame}>START</div>
</div>
