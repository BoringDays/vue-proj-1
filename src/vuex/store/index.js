import Vue from 'vue';
import Vuex from 'vuex';
import home from '../modules/home';
import products from '../modules/products';
import product from '../modules/product';
import user from '../modules/user';

Vue.use(Vuex);

// 于此处组合应用的每个模块
export default new Vuex.Store({
  modules: [home, products, product, user],
  strict: process.env.NODE_ENV !== 'production',
});
