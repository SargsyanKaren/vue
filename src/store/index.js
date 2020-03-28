import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import actions from './actions'
import mutations from './mutations'

import { homeModule } from './modules'

Vue.use(Vuex)

const state = {}

const modules = {
  home: homeModule
}

const plugins = [createLogger()]

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  plugins,
  strict: true
})

export default store
