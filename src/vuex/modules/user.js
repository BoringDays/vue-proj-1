import api from '../api';
import * as types from '../mutations/types';

export default {
  state: {
    user: {},
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    [types.GET_USER_DATA](state, data) {
      // 禁止直接修改函数参数。
      const s = state;
      s.user = data;
    },
  },
  actions: {
    GET_USER_INFO: ({ commit }) => {
      api.getUserData().then((res) => {
        commit(types.GET_USER_DATA, res.data);
      });
    },
  },
};
