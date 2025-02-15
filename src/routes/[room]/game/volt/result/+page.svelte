<script>
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
  
  <style>
    .container {
      width: 100%;
      max-width: 400px;
      margin: auto;
      background: #222;
      color: white;
      text-align: center;
      padding: 10px;
    }
    .timer {
      font-size: 2em;
    }
    .button {
      background: #888;
      border: none;
      padding: 10px;
      margin: 10px;
      cursor: pointer;
    }
    .user-card {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #444;
    }
    .user-image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: gray;
      margin-right: 10px;
    }
    .checkbox {
      margin-left: auto;
    }
    .photo {
      width: 100%;
      max-width: 300px;
      border-radius: 10px;
    }
  </style>
  
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
  