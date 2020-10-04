<template>
<!--root要素は１つでないといけない-->
  <div>
    <p>いいね({{ number }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  //propsはプロパティのこと。
 props:["number"],
  methods:{
    increment(){
      this.number+=1;
    }
  }
};
</script>

<!--scopedによって自身のコンポーネント内のみに適用できる-->
<style scoped>
  div{
    border:1px solid red;
  }

</style>