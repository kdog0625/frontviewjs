<template>
  <div>
  <like-header></like-header>
  <LikeNumber v-bind:number="number"></LikeNumber>
  <LikeNumber :number="number"></LikeNumber>
  </div>
</template>

<script>
//ローカル登録
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data(){
    return{
      number:14
    };
  },
    components:{
      LikeHeader
    }
};
</script>