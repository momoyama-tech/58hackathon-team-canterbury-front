<script>
    import "./style.css";
    import { onMount } from 'svelte';
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
  </script>
  
  <div class="container">
    <h1>WeReal?</h1>
    <h1>陽キャ</h1>
  
    {#each users as user}
      <div class="user-card">
        <div class="user-image"></div>
        <span>{user.name}</span>
      </div>
      <img class="photo" src={user.image} alt="ユーザーの画像">
    {/each}
  </div>
  