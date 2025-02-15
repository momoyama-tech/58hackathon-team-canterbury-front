
<script>
    let isActive = false;
    let Links = false;
    let link_Icon = "/images/link.png";
    let Icon  = "/images/クマ.gif";
    let QR = "/images/QR.png";
    
</script>
<div class="Icon">
    <div class="relative size-32 ...">
        <div class="absolute top-0 left-0 size-16 ..."><img src={Icon} alt="代替テキスト" /></div>
    </div>
</div>
    <div class="player">
    <p>プレイヤー名</p>
    </div>       
    <dev class="dev">
    <h1 class="daimei">ゲーム説明</h1>
    <p>写真人狼です</p>
    </dev>


    <div  class="rounded-lg">
        <img src={QR} alt="代替テキスト" />
    </div>

    
    <dev class="dev">
    <p>room:</p>
    </dev>

    <div class="wrapper">
    <button class="custom-btn" on:click={() => isActive = !isActive}>
        <nav class="Link">
        <img src={link_Icon} alt="代替テキスト" />
        </nav>
    </button>

    <button class="custom-btn" on:click={() => isActive = !isActive}>
    START
    </button>
    </div>

<style>  
    div.player{
        color: white;
        margin: 10px;
        font-size: small;
    }
	.dev{
		color: white;
		font-family: "Hiragino Sans","ヒラギノ角ゴシック"; font-weight: 900;
        text-align: center;
        font-size: 30px;
	}

    h1{
        font-size: 2em;
    }
    .Icon img{
    display: flex;
    justify-content: center; /* 水平方向にセンターに配置 */
    align-items: left;
    margin: 20px 0 0 20px ;
    width: 50px;
    height: 40px;
    object-fit: contain;
    border-radius:50%;
    padding: 0;

}
    .Link img {
        margin: 0 auto;
        width:50px;
        background:none;
    }
    img {
        margin: 0 auto;
        width:300px;
        background:none;
    }
    button {
        font-family: "Hiragino Sans","ヒラギノ角ゴシック"; font-weight: 900;
    }
    .custom-btn {
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    padding: 0px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin: 30px;

    }

    .custom-btn:hover {
        background-color: #a2a2a2;
    }

    .wrapper {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    gap: 1rem;
    width: fit-content;
    margin: 0 auto;
    }    

    .rounded-lg img{
    display: flex;
    justify-content: center; /* 水平方向にセンターに配置 */
    align-items: center; /* 垂直方向にセンターに配置 */
    margin: 0 auto;
    object-fit: contain;
    padding: 0;
    
}
.Link{
    width: 50px;
}

</style>

