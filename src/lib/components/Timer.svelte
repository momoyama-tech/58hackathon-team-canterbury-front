<script>
    import { onMount } from 'svelte';
    let room = "hogehoge"; // ルーム名 (仮)
    let seconds = 4; // タイマー秒数

    async function setTimer() {
        if (!seconds || seconds <= 0) return;

        const response = await fetch('http://localhost:3000/set_timer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ room, seconds, message: "時間になりました！" })
        });

        if (response.ok) {
            alert("タイマーをセットしました！");
        } else {
            alert("タイマーのセットに失敗しました。");
        }
    }
</script>

<h1>タイマー設定</h1>
<input type="number" bind:value={seconds} min="1">
<button on:click={setTimer}>タイマーをセット</button>
