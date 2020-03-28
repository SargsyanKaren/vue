import Vue from 'vue'
import Router from 'vue-router'

import { Home } from '../pages'

Vue.use(Router)

const routes = [
  { path: '/', name: 'Home', component: Home }
]

export default new Router({ routes })
