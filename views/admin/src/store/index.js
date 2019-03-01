/**
 * VueX demo
 * 如果不需要使用模块化的数据，请删除modules及相关文件
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    getters,
    ...mutations
});