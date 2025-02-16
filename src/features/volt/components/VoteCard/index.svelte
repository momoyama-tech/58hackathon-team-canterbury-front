<script>

    export let username;
    export let imageUrl;
    export let checkedTop = false;
    export let checkedBottom = false;

    let isCheckedTop = checkedTop;
    let isCheckedBottom = checkedBottom;

    function toggleCheck_Top() {
        isCheckedTop = !isCheckedTop;
    }

    function toggleCheck_Bottom() {
        isCheckedBottom = !isCheckedBottom;
    }
</script>

<label class="flex items-center cursor-pointer label-checkbox">
<div class="flex items-center p-4 bg-gray-800 rounded-lg shadow-lg text-white full-width">
    <!-- チェックボックス -->
        <div class="username">
            <span class="username flex flex-column text-lg font-semibold">{username}</span>

        </div>

        <div class="flex-end">

            <input type="checkbox" checked={isCheckedTop} class="hidden vote-checkbox" on:change={toggleCheck_Top} />

        </div>

        <div class="w-6 h-6 flex justify-center items-center border-2 border-gray-400 rounded-full mr-3">
            {#if isCheckedTop}
                <span class="text-purple-400 text-xl font-bold"></span>
            {/if}
        </div>
</div>
</label>

<style>
    .full-width {
        width: 100%;
        display: flex;
    }
.vote-checkbox {
    flex: 1;
    justify-content: flex-end;
}
.username {
    flex: 3;

}
</style>