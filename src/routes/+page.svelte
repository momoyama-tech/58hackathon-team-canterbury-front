<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<img src="#">

<script>
    import Button from '../components/Buttons//Button/index.svelte'; // Buttonコンポーネントをインポート
  
    // ボタンクリック時の処理
    const handleClick = () => {
      alert('Button clicked!');
    };
  </script>
  
  <main>
    <Button label="Click Me" onClick={handleClick} />
  </main>