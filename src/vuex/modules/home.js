import api from '../api';
import * as types from '../mutations/types';

export default {
  state: {
    indexData: {},
  },
  getters: {
    getIndexSettings: state => state.indexData,
  },
  mutations: {
    [types.GET_INDEX_DATA](state, data) {
      // 禁止直接修改函数参数。
      const s = state;
      s.indexData = data;
    },
  },
  actions: {
    GET_INDEX_SETTINGS: ({ commit }) => {
      const result = api.getIndexSettings().then((res) => {
        commit(types.GET_INDEX_DATA, res.data.data);
      });
      return result;
    },
  },
};
