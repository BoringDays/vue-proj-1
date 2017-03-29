import api from '../api';
import * as types from '../mutations/types';

export default {
  state: {
    indexData: {},
  },
  getters: {
    [types.GET_INDEX_DATA]: state => state.indexData,
  },
  mutations: {
    [types.GET_INDEX_DATA](state, data) {
      // 禁止直接修改函数参数。
      const s = state;
      s.indexData = data;
    },
  },
  actions: {
    [types.GET_INDEX_DATA]: ({ commit }) => api.getIndexSettings().then((res) => {
      commit(types.GET_INDEX_DATA, res.data.data);
    }),
  },
};
