import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    data: null
  },
  getters: {
    data(state) {
      return state.data;
    }
  }, 
  mutations: {
    setData (state, data) {
      state.data = data;
    }
  }
})

export default store;