<script>
    import "./style.css";
    export let players = [
      { name: "aina", image: "path/to/image1.jpg" },
      { name: "aina", image: "path/to/image2.jpg" },
      { name: "aina", image: "path/to/image3.jpg" },
      { name: "aina", image: "path/to/image4.jpg" }
    ];
    export let roomId = "114514";
    export let qrCodeSrc = "path/to/qrcode.png";
  </script>
  
  <div class="container">
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
  
    <div class="qr-code">
      <img src={qrCodeSrc} alt="QR Code" width="150" />
    </div>
  
    <p class="room-id">room: {roomId}</p>
  
    <div class="buttons">
      <div class="button">🔗</div>
      <div class="button">START</div>
    </div>
  </div>
  