<script>
  import "./style.css";
  import { onMount } from 'svelte';
  let timer = 0;
  let interval;
  let selected = null;

  const users = [
    {
      id: 1,
      name: 'ユーザーネーム',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      name: 'ユーザーネーム',
      image: 'https://via.placeholder.com/300x200',
    }
  ];

  onMount(() => {
    interval = setInterval(() => {
      timer++;
    }, 1000);
  });

  function selectUser(id) {
    selected = id;
  }
</script>

<div class="container">
  <h1>WeReal?</h1>
  <div class="timer">{String(timer).padStart(2, '0')}:00</div>
  <button class="button">投票する</button>

  {#each users as user}
    <div class="user-card">
      <div class="user-image"></div>
      <span>{user.name}</span>
      <input type="checkbox" class="checkbox" bind:group={selected} value={user.id}>
    </div>
    <img class="photo" src={user.image} alt="ユーザーの画像">
  {/each}
</div>
  