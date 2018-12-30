import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store.js'

Vue.prototype.URL = "http://195.240.135.237:80";

Vue.config.productionTip = false;
Vue.use(Element, { locale });

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
