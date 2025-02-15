01
<script>
    import Logo from '$src/components/Logos/Logo/index.svelte';
    import "./style.css";
    import Makebtn from '$src/components/Buttons/makebtn/index.svelte';
    import Joinbtn from '$src/components/Buttons/joinbtn/index.svelte';
</script>

<main class="main">
    <Logo/>
    <div class="btn">
       <Makebtn/>
       <Joinbtn/>
    </div>

    
</main>