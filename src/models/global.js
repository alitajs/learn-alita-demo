
const GlobalModel = {
  namespace: 'global',

  state: {
    name: 'learn alita',
    list:['step1','step2','step3','step4']
  },
  effects: {
    *changeName({ payload }, { call, put }) {
      yield put({
        type: 'save',
        payload: { name: payload.name },
      });
    },
    *deleteItem({ payload }, { call, put,select }) {
        const { list } = yield select(_=>_.global);
        yield call(()=>new Promise(resolve => {
            setTimeout(resolve, 1000);
          }))
        list.splice(list.findIndex(e => e === payload), 1)
        yield put({
          type: 'save',
          payload: { list },
        });
      },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default GlobalModel;
