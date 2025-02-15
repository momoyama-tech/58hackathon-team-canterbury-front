<script>
    let {src,size} = $props();
    let defaultIcon ="/images/defaultIcon.png";
</script>

<img Class="User-icon"
    src={src ? src: defaultIcon}
    alt="ユーザーアイコン"
    width={size}
    height={size}
    />

