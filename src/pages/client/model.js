import { queryRule, removeInfo } from './service';

export default {
  namespace: 'client',
  state: {
    data: {
      items: [],
    },
  },
  effects: {
    *getData({ payload, callback }, { call, put }) {
      const response = yield call(queryRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
  },
  reducers: {
    save(state, { payload }) {
      console.log(state, payload);
      return {
        ...state,
        data: payload,
      };
    },
  },
};
