import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Products from '../components/Products.vue';
import AddProduct from '../components/product/AddProduct.vue';
import ProductsList from '../components/product/ProductsList.vue';
import Product from '../components/Product.vue';
import Config from '../components/Config.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: Home,
}, {
  path: '/product',
  component: Products,
  children: [
    {
      path: '/',
      component: ProductsList,
    },
    {
      path: 'add',
      component: AddProduct,
    },
  ],
}, {
  path: '/product/:id',
  component: Product,
}, {
  path: '/config',
  component: Config,
}];

const router = new VueRouter({ routes });

export default router;
