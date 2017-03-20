import axios from 'axios';

axios.defaults.baseURL = '/static/datas';

export default {
  getIndexSettings() {
    return axios.get('/indexSettings');
  },
  getProducts() {
    return axios.get('/products');
  },
  getProduct(id) {
    return axios.get('/product', {
      params: {
        id,
      },
    });
  },
  getUserData() {
    return axios.get('/user');
  },
};
