import Vue from 'vue'
//.Vueファイル(一般的に使えないがVueCLIの中だから使える)をインポートしてる(コンポーネントのオブジェクトをインポートしている)
import App from './App.vue'
import LikeNumber from "./LikeNumber.vue"

Vue.config.productionTip = false
//グローバル登録
Vue.component('LikeNumber',LikeNumber)

new Vue({
  render: h => h(App),
}).$mount('#app');
