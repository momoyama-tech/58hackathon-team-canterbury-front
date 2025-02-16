<script>

    export let username;
    export let imageUrl;
    export let checked = false;

    let isChecked = checked;

    function toggleCheck() {
        isChecked = !isChecked;
    }
</script>


<div class="flex items-center p-4 bg-gray-800 rounded-lg shadow-lg text-white">
    <!-- チェックボックス -->
    <label class="flex items-center cursor-pointer">
        <input type="checkbox" bind:checked={isChecked} class="hidden" on:change={toggleCheck} />
        <div class="w-6 h-6 flex justify-center items-center border-2 border-gray-400 rounded-full mr-3">
            {#if isChecked}
                <span class="text-purple-400 text-xl font-bold">✔</span>
            {/if}
        </div>
    </label>

    <!-- ユーザー名と画像 -->
    <div class="flex flex-col">
        <span class="text-lg font-semibold">{username}</span>
        <img src="{imageUrl}" alt="{username}" class="mt-2 w-64 h-40 object-cover rounded-lg border border-gray-500">
    </div>
</div>
