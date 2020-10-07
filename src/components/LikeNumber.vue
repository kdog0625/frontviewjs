<template>
<!--root要素は１つでないといけない-->
  <div>
    <p>いいね({{ totalNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  //propsはプロパティのこと。
 props:["totalNumber"],
 //propsはスクリプトの中でも使用可能
 computed:{
   halfNumber(){
     return this.totalNumber / 2;
   }
 },
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