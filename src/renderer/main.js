import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

// Extra Global Components

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import KeenUI from 'keen-ui'
// import 'keen-ui/dist/keen-ui.css'

import VueAnime from 'vue-animejs'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

// Firebase

import * as firebase from 'firebase/app'
import 'firebase/database'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.config.devtools = process.env.NODE_ENV !== 'production'

Vue.use(ElementUI)
Vue.use(VueAnime)

Vue.use(KeenUI)

Vue.use(VueMaterial)

const firebaseConfig = {
  apiKey: 'AIzaSyC_CG3k95cs90JHRXFcvqnbEgfoWslaD1c',
  authDomain: 'solo-1511.firebaseapp.com',
  databaseURL: 'https://solo-1511.firebaseio.com',
  projectId: 'solo-1511',
  storageBucket: 'solo-1511.appspot.com',
  messagingSenderId: '287043640624',
  appId: '1:287043640624:web:84788b14d19a51f84d7cf5',
  measurementId: 'G-2BHHGEM9PP'
}

firebase.initializeApp(firebaseConfig)

Vue.prototype.$db = firebase.database()

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
