<template>
<!--root要素は１つでないといけない-->
  <div>
    <p>いいね({{ totalNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  //propsで型を指定。文字列だとエラーが出る。なのでバリデーションを設定する。
 props:{
   //型だけでなくオブジェクトも指定できる。
  totalNumber: {
    type:Number,
    default:10
  }
 },
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