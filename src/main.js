import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // 一个现代的替代CSS重置

import Element from 'element-ui'
import './styles/element-variables.scss'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
import '@/styles/index.scss' // global css
import '@/styles/hydsj-ass.scss'

import App from './App'
import store from './store'
import router from './router'

import i18n from './lang' // internationalization
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

Vue.prototype.$echarts = echarts;
require('echarts-wordcloud');

/**
 如果您不想使用mock-server
 *你想使用MockJs来模拟api
 *你可以执行:mockXHR()
 *
 *目前MockJs将在生产环境中使用，
 *请在上网前删除它!
 !
 !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
