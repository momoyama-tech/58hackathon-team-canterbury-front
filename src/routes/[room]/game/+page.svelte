<script>
  import "./style.css";
  import { page } from '$app/stores';
  import ImageUploader from '$src/components/ImageUploader.svelte';
  import { onMount } from 'svelte';
  import { connectWebSocket } from '$lib/chat.js';

  let timer = "00:00";
  let room = '';
  let socket;

  $: room = $page.params.room;

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  onMount(() => {
    socket = connectWebSocket(room, localStorage.getItem("nickname"), (message) => {
      if (message.command === 'countdown') {
        timer = formatTime(message.time);
      }
      if (message.command === 'time_up') {
        alert(message.message || "Time's up!");
      }
    });
  });
</script>

<div class="container">
  <div class="header">WeReal?</div>
  <div class="timer">{timer}</div>
  <button class="topic-button">お題</button>
  <div class="spacer" style="flex: 1;"></div>
  <ImageUploader room={room} />
</div>