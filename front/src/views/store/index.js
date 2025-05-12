import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    boards: []
  },
  mutations: {
    setBoards(state, boards) { state.boards = boards; }
  },
  actions: {
    fetchBoards({ commit }) {
      // lógica de fetch (API ou localStorage)
    }
  },
});