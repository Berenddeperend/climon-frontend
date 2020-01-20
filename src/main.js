import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store.js'
import abetoo from '@/mixins/abetoo';

Vue.prototype.WemosURL = "http://192.168.2.31";
Vue.prototype.WemosAbetooId = "-V898dmJStk-FIgeLCMbfhQ636307126199562031#970e53896952cb6fe023a0858025509fbc896d63";
Vue.prototype.URL = "http://195.240.135.237:4000";

Vue.config.productionTip = false;
Vue.use(Element, { locale });
Vue.mixin(abetoo);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')


//pi.mijndomein.nl
//blog.mijndomein.nl\

//nginx pi.mikjndl.ml; --§> localhost:4000

