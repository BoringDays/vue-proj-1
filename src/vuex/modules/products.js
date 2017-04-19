import api from '../api';
import * as types from '../mutations/types';

export default {
  state: {
    products: [],
  },
  getters: {
    [types.GET_PRODUCTS]: state => state.products,
  },
  mutations: {
    [types.GET_PRODUCTS](state, data) {
      // 禁止直接修改函数参数。
      const s = state;
      s.products = data;
    },
  },
  actions: {
    [types.GET_PRODUCTS]: ({ commit }, params) => api.getProducts(params).then((res) => {
      commit(types.GET_PRODUCTS, res.data.data);
    }),
  },
};
