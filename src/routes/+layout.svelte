<script>
    import { i18n } from '$lib/i18n';
    import { ParaglideJS } from '@inlang/paraglide-sveltekit';
    import './layout.css';
    import '$src/app.css';
    // ページコンテンツを受け取る
    let {children} = $props();
</script>

<ParaglideJS {i18n}>
    <div class="container">
        <div class="main">{@render children()}</div>
    </div>
</ParaglideJS>

  