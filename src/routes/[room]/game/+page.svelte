<script>
  import "./style.css";
  let timer = "00:00";

  function startCamera() {
    console.log("Camera button clicked");
    // ここにカメラ起動処理を追加
  }
</script>

<div class="container">
  <div class="header">WeReal?</div>
  <div class="timer">{timer}</div>
  <button class="topic-button">お題</button>
  <div class="spacer" style="flex: 1;"></div>
  <img src="/camera-icon.png" class="camera-button" on:click={startCamera} />
</div>
  