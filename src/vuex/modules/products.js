import api from '../api';
import * as types from '../mutations/types';

export default {
  state: {
    products: [],
  },
  getters: {
    [types.GET_PRODUCTS](state) {
      return state.products;
    },
  },
  mutations: {
    [types.GET_PRODUCTS](state, data) {
      // 禁止直接修改函数参数。
      const s = state;
      s.products = data;
    },
  },
  actions: {
    [types.GET_PRODUCTS]: ({ commit }) => api.getProducts().then((res) => {
      commit(types.GET_PRODUCTS, res.data);
    }),
  },
};
