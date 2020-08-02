import Vue from 'vue'

// import Cookies from 'js-cookie'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css
import global from '@/common/global/global'
import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log
import dataV from '@jiaminghi/data-view'
import * as filters from './filters' // global filters
import { get, post } from '@/axios/axios.js'
import echarts from 'echarts'
import 'default-passive-events'
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 * 如果是开发环境就使用mock
 */
// if (process.env.NODE_ENV === 'development') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// Vue.use(Element, {
//   size: Cookies.get('size') || 'medium' // set element-ui default size
// })
Vue.use(Element)
Vue.use(dataV)
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
Vue.prototype.$get = get
Vue.prototype.$echarts = echarts
Vue.prototype.$post = post
Vue.prototype.global = global
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
