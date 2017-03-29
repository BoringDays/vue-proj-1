// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ES6Promise from 'es6-promise';
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import FastClick from 'fastclick';
import store from './vuex/store';
import router from './router';
// import axios from 'axios';
import App from './App';
import './mock';

ES6Promise.polyfill(); // ie11或以下浏览器没有原生promise支持
FastClick.attach(document.body);
sync(store, router);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app-box');
