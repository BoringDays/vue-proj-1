// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import FastClick from 'fastclick';
import store from './vuex/store';
import router from './router';
// import axios from 'axios';
import App from './App';
import './mock';

// axios 需要全局设置就在这里做，axios.defaults = ...

FastClick.attach(document.body);
sync(store, router);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
