import Vuex from "vuex";
import Vue from "vue";

const actions = new Worker("./actions.js", { type: 'module' });

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    items: [],
    isWorking: false
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items;
    },
    SET_WORKING(state, value) {
      state.isWorking = value;
    }
  },
  actions: {
    generateItems() {
      actions.postMessage("generateItems");
    }
  }
});

actions.onmessage = e => {
  store.commit(e.data.type, e.data.payload);
};

export default store;
