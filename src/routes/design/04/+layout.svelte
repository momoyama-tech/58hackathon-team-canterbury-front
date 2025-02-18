<script>
    import { i18n } from '$lib/i18n';
    import { ParaglideJS } from '@inlang/paraglide-sveltekit';
    import './layout.css';
    import VoltsHeader from "$src/features/volt/components/VoltsHeader/index.svelte"
  
    // ページコンテンツを受け取る
    let {children} = $props(); //page.svelteの中身を受けとる
    
</script>

<ParaglideJS {i18n}>
    <div class="container">
        <div class="main">
            <VoltsHeader/>
            {@render children()}
        </div>
    </div>
</ParaglideJS>

  