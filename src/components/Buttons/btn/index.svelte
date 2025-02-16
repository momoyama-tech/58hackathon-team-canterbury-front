<script lang="ts">
  type ButtonProps = {
    label:string,
    onClick?:()=>{}
  }

  import "./style.css"
  let {label,onClick}:ButtonProps = $props();

  //box.addEventListener('mouseover',function(){
  //})//hoverをTSにしようとしてみたが，ここのboxが反応しなかった cant find name
</script>

<button on:click={onClick} class="BasicButton" id="box">
  {label}
</button>