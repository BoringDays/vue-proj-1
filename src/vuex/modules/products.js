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
    [types.SET_PRODUCTS](state, data) {
      // 禁止直接修改函数参数。
      const s = state;
      s.products = data;
    },
  },
  actions: {
    [types.SET_PRODUCTS]: ({ commit }) => api.getProducts().then((res) => {
      commit(types.SET_PRODUCTS, res.data.data);
    }),
  },
};
