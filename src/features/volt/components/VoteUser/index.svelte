<script>
    export let username;
    export let imageUrl;
    export let checked = false;
  </script>
  
  <div class="user-info">
    <!-- ユーザーアイコン -->
    <img src={imageUrl} alt="User Avatar" />
  
    <!-- ユーザー名 -->
    <span>{username}</span>
  
    <!-- チェックボックス -->
    <input type="checkbox" class="checkbox" bind:checked />
  </div>
  
  <style>
    .user-info {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 10px;
    }
  
    .user-info img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  
    .checkbox {
      margin-left: auto;
    }
  </style>
  