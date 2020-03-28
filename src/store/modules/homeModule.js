export default {
  state: {
    name: 'Valod',
    x: 1
  },
  mutations: {
    increment (state) {
      state.x++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
}
