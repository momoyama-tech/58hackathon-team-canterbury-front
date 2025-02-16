<script>
  import { onMount } from 'svelte';
  import { connectWebSocket } from '$lib/chat.js';

  export let room;

  let file;
  let messages = [];
  let socket;

  onMount(() => {
    socket = connectWebSocket(room, (message) => {
      if (message.type === 'image') {
        messages = [...messages, { type: 'image', data: message.data }];
        scrollToBottom();
      }
    });
  });

  function handleFileUpload(event) {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      const base64Image = reader.result;
      sendImage(base64Image);
    };
  }

  function sendImage(base64Image) {
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
    scrollToBottom();
  }

  function scrollToBottom() {
    setTimeout(() => {
      const container = document.getElementById('message-container');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 100);
  }
</script>

<style>
  .hidden-input {
    display: none;
  }

  .camera-button {
    width: 50px;
    height: 50px;
    cursor: pointer;
    filter: invert(100%);
  }

  .camera-button:hover {
    opacity: 0.8;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }

  .message-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 500px;
    overflow-y: auto;
    border: 1px solid #ccc;
    padding: 10px;
    width: 80%;
    max-width: 500px;
  }
  
  .message-container img {
    max-width: 80%;
    margin: 5px 0;
  }
</style>

<div class="container">
  <input type="file" id="fileInput" accept="image/*" on:change={handleFileUpload} class="hidden-input" />
  <label for="fileInput">
    <img src="/images/camera-icon.png" class="camera-button" alt="Upload Image" />
  </label>

  <h3>受信した画像</h3>
  <div id="message-container" class="message-container">
    {#each messages as message}
      {#if message.type === 'image'}
        <img src={message.data} alt="Received Image" />
      {/if}
    {/each}
  </div>
</div>