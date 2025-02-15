<script>
  import "./style.css";
  import { onMount } from "svelte";
  import { page } from '$app/stores';
  import QRCode from "qrcode";
  let qrCodeUrl = "";

  onMount(async () => {
    const url = window.location.href;  // 現在のURLを取得
    qrCodeUrl = await QRCode.toDataURL(url);  // URLをQRコードに変換
  });

  export let players = [
    { name: "aina", image: "https://placehold.jp/150x150.png" },
    { name: "aina", image: "https://placehold.jp/150x150.png" },
    { name: "aina", image: "https://placehold.jp/150x150.png" },
    { name: "aina", image: "https://placehold.jp/150x150.png" }
  ];
  export let roomId = "";
  $: roomId = $page.params.room;
</script>
  
<h1>WeReal?</h1>

<div class="players">
  {#each players as player}
    <div class="player">
      <img src={player.image} alt={player.name} />
      <p>{player.name}</p>
    </div>
  {/each}
</div>

<div class="game-description">
  <h2>ゲーム説明</h2>
  <p>写真人狼です</p>
  <p>ああああああああああああ</p>
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
  <div class="button">START</div>
</div>
  