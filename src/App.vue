<template>
  <div>
  <like-header></like-header>
  <LikeNumber :totalNumber="number"></LikeNumber>
  <LikeNumber :total-number="number"></LikeNumber>
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