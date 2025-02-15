01
<script>
    import Logo from '$src/components/Logos/Logo/index.svelte';
    import "./style.css";
    import BasicButton from '$src/components/Buttons/btn/index.svelte';
</script>

<main class="main">
    <Logo/>
    <div class="btn">
       <BasicButton label="部屋を作成"/>
       <BasicButton label="部屋に入室"/>
    </div>

    
</main>