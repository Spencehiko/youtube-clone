import { createStore } from 'vuex'

export default createStore({
  state: {
    showSidemenu: true,
  },
  mutations: {
    toggleSidemenu(state) {
      state.showSidemenu = !state.showSidemenu; 
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    showSidemenu: state => state.showSidemenu,
  }
})
