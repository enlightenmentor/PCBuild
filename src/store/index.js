import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const STORAGE_NAME = 'vuex-store';

export default new Vuex.Store({
  state: JSON.parse(window.localStorage.getItem(STORAGE_NAME)) || {
    user: null,
    components: [],
    builds: []
  },
  getters: {
    getComponent: (state) => (id) => {
      return state.components.find((item) => item._id === id);
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setComponents(state, payload) {
      state.components = payload;
    },
    addComponent(state, payload) {
      state.components.push(payload);
    },
    removeComponent(state, payload) {
      const index = state.components.findIndex((item) => item._id === payload);
      state.components.splice(index, 1);
    },
    setBuilds() {

    }
  },
  plugins: [
    (store) => {
      store.subscribe((mutation, state) => {
        window.localStorage.setItem(STORAGE_NAME, JSON.stringify(state));
      })
    }
  ]
})