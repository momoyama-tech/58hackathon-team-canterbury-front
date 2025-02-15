01
<script>
    import Logo from '$src/components/Logos/Logo/index.svelte';
    import "./style.css";
    import Btn from '$src/components/Buttons/btn/index.svelte';
</script>

<main class="main">
    <Logo/>
    <div class="btn">
       <Btn label="部屋を作成"/>
       <Btn label="部屋に入室"/>
    </div>

    
</main>