import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router';
import api from './api'
import store from './store';
import moment from 'moment'


Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue();
Vue.prototype.$api = api;
Vue.prototype.$moment = moment;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');