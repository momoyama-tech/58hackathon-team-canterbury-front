<script>
  import "./style.css";
  import { page } from '$app/stores';
  import ImageUploader from '$src/components/ImageUploader.svelte';
  let timer = "00:00";
  let room = '';

  $: room = $page.params.room;
</script>

<div class="container">
  <div class="header">WeReal?</div>
  <div class="timer">{timer}</div>
  <button class="topic-button">お題</button>
  <div class="spacer" style="flex: 1;"></div>
  <ImageUploader room={room} />
</div>
  