<script>
    export let players = [
      { name: "aina", image: "path/to/image1.jpg" },
      { name: "aina", image: "path/to/image2.jpg" },
      { name: "aina", image: "path/to/image3.jpg" },
      { name: "aina", image: "path/to/image4.jpg" }
    ];
    export let roomId = "114514";
    export let qrCodeSrc = "path/to/qrcode.png";
  </script>
  
  <style>
    .container {
      text-align: center;
      background: black;
      color: white;
      padding: 1rem;
    }
    .players {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .player {
      text-align: center;
    }
    .player img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .game-description {
      background: white;
      color: black;
      padding: 1rem;
      border-radius: 10px;
      margin: 1rem auto;
      width: 80%;
    }
    .qr-code {
      margin: 1rem 0;
    }
    .room-id {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
    }
    .button {
      background: white;
      color: black;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
  
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
  