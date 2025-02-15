<script>
    import "./style.css";
    import { nickname } from '$lib/stores.js';
    import { onMount } from "svelte";
    import { browser } from "$app/environment";

    let isProfileModalOpen = false;
    let isRoomModalOpen = false;

    function closeProfileModalOpen() {
      if (!($nickname == "" || $nickname == null)) {
        isProfileModalOpen = false;
      }
    }

    function openRoomModalOpen() {
      isRoomModalOpen = true;
    }

    function closeRoomModalOpen() {
      isRoomModalOpen = false;
    }

    onMount(() => {
      if (browser) {
        nickname.set(localStorage.getItem("nickname") || "");
        if ($nickname == "" || $nickname == null) {
          isProfileModalOpen = true
        }
      }
    });
</script>

<h1 class="text-3xl font-bold mb-4 text-white">WeReal?</h1>
<button class="px-4 py-2 bg-blue-500 text-white rounded">
    部屋を作成
</button>
<button on:click={openRoomModalOpen} class="px-4 py-2 bg-blue-500 text-white rounded">
    部屋に入室
</button>

{#if isProfileModalOpen}
  <div class="fixed top-0 left-0 h-screen bg-black bg-opacity-50">
    <div class="h-screen bg-gray-900 text-white p-6 rounded-b-lg w-full max-w-md shadow-lg relative">
      <button on:click={closeProfileModalOpen} class="absolute top-4 left-4 text-2xl">×</button>
      <h2 class="text-2xl font-bold mb-4 text-center">プレイヤー設定</h2>
      <div class="space-y-4">
        <div>
          <label class="block mb-1">アバター:</label>
          <input type="file" class="border-2 border-gray-300 rounded-lg w-full p-2">
        </div>
        <div>
          <label class="block mb-1">ニックネーム:</label>
          <input type="text" bind:value={$nickname} placeholder="ニックネームを入力" class="border-2 border-gray-300 rounded-lg w-full p-2">
        </div>
      </div>
    </div>
  </div>
{/if}

{#if isRoomModalOpen}
  <div class="fixed top-0 left-0 h-screen bg-black bg-opacity-50">
    <div class="h-screen w-screen bg-gray-900 text-white p-6 rounded-b-lg w-full max-w-md shadow-lg relative">
      <button on:click={closeRoomModalOpen} class="absolute top-4 left-4 text-2xl">×</button>
      <h2 class="text-2xl font-bold mb-4 text-center">Room番号</h2>
      <div class="space-y-4">
        <div>
          <input type="text" class="border-2 border-gray-300 rounded-lg w-full p-2">
        </div>
        <button class="px-4 py-2 bg-blue-500 text-white rounded">
            部屋に入室
        </button>
        <div>
            <button class="w-full py-2 bg-gray-700 hover:bg-gray-600 text-white rounded flex items-center justify-center">
                📷 カメラ
            </button>
        </div>
      </div>
    </div>
  </div>
{/if}