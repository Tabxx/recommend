import Vue from 'vue';
import Router from 'vue-router';
import Index from './components/home/index.vue';
import Cpu from './components/hardware/Cpu.vue';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/index'
        },
        // 个人中心
        {
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/cpu',
            name: 'cpu',
            component: Cpu
        }
    ]
});