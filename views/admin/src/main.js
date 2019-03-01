import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router';
import api from './api'
import store from './store';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue();
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');