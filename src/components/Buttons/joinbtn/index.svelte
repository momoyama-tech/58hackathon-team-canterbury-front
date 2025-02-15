<script>
    import "./style.css"
    export let label = '部屋に入室'; // ボタンのラベル
    export let onClick = () => {}; // クリック時の処理
    
  </script>
  
  <button on:click={onClick} class="join-btn">
    {label}
  </button>