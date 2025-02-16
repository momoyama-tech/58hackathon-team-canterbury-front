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

<label class="">
	<div class="full-width">
		<!-- チェックボックス -->
		<div class="username">
			<span>{username}</span>
		</div>

		<div class="flex-end">
			<input
				type="checkbox"
				checked={isCheckedTop}
				class="vote-checkbox hidden"
				on:change={toggleCheck_Top}
			/>
		</div>

		<div class="">
			{#if isCheckedTop}
				<span class="text-xl font-bold text-purple-400"></span>
			{/if}
		</div>
	</div>
</label>

<style>
	.full-width {
		width: 100%;
		display: flex;
	}
	.username {
		flex: 1;
	}
	.vote-checkbox {
		flex: 1;
		margin-left: auto;
	}
</style>
