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

<label class="VoteCard">
	<div class="flex-rows">
		<div class="flex-cols">
			<div class="full-width">
				<!-- チェックボックス -->
				<div class="username">
					<span>{username}</span>
				</div>

				<div class="flex-end">
					<input
						type="checkbox"
						checked={isCheckedTop}
						class="vote-checkbox"
						on:change={toggleCheck_Top}
					/>
				</div>
			</div>

			<div class="">
				<img
					src={imageUrl}
					alt={username}
					class="mt-2 h-40 w-64 rounded-lg border border-gray-500 object-cover"
				/>
			</div>
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
		color: #eeeeee;
	}
	.vote-checkbox {
		flex: 1;
		margin-left: auto;
	}
	.flex-rows {
		flex-direction: row;
	}
	.flex-cols {
		flex-direction: column;
	}
	.VoteCard {
		background: #333;
		padding: 10px;
		margin: 10px 0;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
