import api from '../api';
import * as types from '../mutations/types';

export default {
  state: {
    product: {},
  },
  getters: {
    [types.GET_PRODUCT]: state => state.product,
  },
  mutations: {
    [types.GET_PRODUCT](state, data) {
      // 禁止直接修改函数参数。
      const s = state;
      s.product = data;
    },
  },
  actions: {
    [types.GET_PRODUCT]: ({ commit }, id) => {
      api.getProduct(id).then((res) => {
        commit(types.GET_PRODUCT, res.data.data);
      });
    },
  },
};
