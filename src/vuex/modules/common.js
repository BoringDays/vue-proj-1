import * as types from '../mutations/types';

export default {
  state: {
    header: {
      show: true,
      setting: {},
    },
    nav: {
      show: true,
      activeIndex: 0,
      itemSetting: {},
    },
  },
  getters: {
    [types.GET_HEADER_STATE]: state => state.header,
    [types.GET_NAV_STATE]: state => state.nav,
  },
  mutations: {
    [types.SET_HEADER_STATE](state, data) {
      const s = state;
      s.header = data;
    },
    [types.SET_NAV_STATE](state, data) {
      const s = state;
      s.nav = data;
    },
  },
};
