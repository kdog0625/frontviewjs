import Vue from 'vue'
//.Vueファイル(一般的に使えないがVueCLIの中だから使える)をインポートしてる(コンポーネントのオブジェクトをインポートしている)
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
