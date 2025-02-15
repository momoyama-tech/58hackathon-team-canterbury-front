<script>
    import "./style.css"
    export let label = 'Click Me'; // ボタンのラベル
    export let onClick = () => {}; // クリック時の処理
    
  </script>
  
  <button on:click={onClick} class="btn">
    {label}
  </button>
  
