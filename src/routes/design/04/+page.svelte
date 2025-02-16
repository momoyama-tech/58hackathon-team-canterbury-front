<script>
  import "./style.css";
  import VoteSection from "$src/features/volt/components/VoteSection/index.svelte"
  import VoteCard from "$src/features/volt/components/VoteCard/index.svelte"

  let candidate = {
    username: "ユーザーネーム",
    imageUrl: "https://via.placeholder.com/300x200",
    checked: true
  };
</script>


 <div class="voltContainer">
  <!-- タイマー -->
  <VoteSection/>
  <!-- 投票カード -->
  <VoteCard {...candidate} />
</div>

 
