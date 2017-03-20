import * as types from './types';

export default {
  [types.SET_HEADER](state, data) {
    state.headerStatus = data;
  },
};
