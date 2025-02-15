<script>
    import "./style.css"
    export let label = '部屋を作成'; // ボタンのラベル
    export let onClick = () => {}; // クリック時の処理
    
  </script>
  
  <button on:click={onClick} class="mk-btn">
    {label}
  </button>