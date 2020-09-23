<template>
  <div>
  <like-header></like-header>
  <LikeNumber></LikeNumber>
  </div>
</template>

<script>
//ローカル登録
import LikeHeader from "./components/LikeHeader.vue";

export default {
    components:{
      LikeHeader
    }
};
</script>