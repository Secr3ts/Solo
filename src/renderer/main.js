import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import KeenUI from 'keen-ui'
// import 'keen-ui/dist/keen-ui.css'

import VueAnime from 'vue-animejs'

import { MdButton, MdToolbar } from 'vue-material/dist/components'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.config.devtools = process.env.NODE_ENV !== 'production'

Vue.use(ElementUI)
Vue.use(VueAnime)

Vue.use(MdButton)
Vue.use(MdToolbar)

Vue.use(KeenUI)

/* eslint-disable no-new */
new Vue({
  components: {
    App
  },
  // vuetify,
  router,
  store,
  template: '<App/>'
}).$mount('#app')

window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = App.constructor
