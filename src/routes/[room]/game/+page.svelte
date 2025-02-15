<script>
    let timer = "00:00";
  
    function startCamera() {
      console.log("Camera button clicked");
      // ここにカメラ起動処理を追加
    }
  </script>
  
  <style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100vh;
      background-color: #222;
      color: white;
      text-align: center;
    }
  
    .header {
      width: 100%;
      background-color: black;
      padding: 10px;
      font-weight: bold;
      font-size: 20px;
    }
  
    .timer {
      font-size: 40px;
      margin: 10px 0;
    }
  
    .topic-button {
      background: gray;
      padding: 20px;
      font-size: 24px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
    }
  
    .camera-button {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 80px;
    }
  </style>
  
  <div class="container">
    <div class="header">WeReal?</div>
    <div class="timer">{timer}</div>
    <button class="topic-button">お題</button>
    <div class="spacer" style="flex: 1;"></div>
    <img src="/camera-icon.png" class="camera-button" on:click={startCamera} />
  </div>
  