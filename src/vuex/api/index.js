import axios from 'axios';

// axios.defaults.baseURL = '/api';

export default {
  getIndexSettings() {
    return axios.get('/indexSettings');
  },
  getProducts(params) {
    return axios.get('/products', {
      params,
    });
  },
  getProduct(productID) {
    return axios.get('/product', {
      params: {
        id: productID,
      },
    });
  },
  getUserData() {
    return axios.get('/user');
  },
};
