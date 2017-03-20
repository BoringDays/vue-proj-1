import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import Products from '../components/Products';
import Product from '../components/Product';
import Config from '../components/Config';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: Home,
}, {
  path: '/product',
  component: Products,
}, {
  path: '/product/:id',
  component: Product,
}, {
  path: '/config',
  component: Config,
}];

const router = new VueRouter({ routes });

export default router;
