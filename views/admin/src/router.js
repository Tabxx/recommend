import Vue from 'vue';
import Router from 'vue-router';
import Index from './components/home/index.vue';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/cpu',
            name: 'cpu',
            component: () => import( /* webpackChunkName: "cpu" */ './components/hardware/Cpu.vue'),
        },
        {
            path: '/graphics',
            name: 'graphics',
            component: () => import( /* webpackChunkName: "graphics" */ './components/hardware/Graphics.vue'),
        }
    ]
});