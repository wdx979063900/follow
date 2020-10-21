import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 1,
  },
  mutations: {
    // 改变
    //  同步
    add(state, num) {
      state.count += num;
    },
  },
  actions: {
    //  异步
  },
  getters: {
    count(state) {
      state.count += 100;
    },
  },
  modules: {
  },
});
