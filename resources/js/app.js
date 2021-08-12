require('./bootstrap')

import Vue from 'vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import App from './components/App'

window.axios.interceptors.response.use(
  response => response,
  error => {

  if (error.response
    && [401, 419].includes(error.response.status)
    && store.getters["auth/isAuthenticated"]
    && !error.config._retry) {

    error.config._retry = true
    store.dispatch('auth/logout')
    router.push({ name: 'login' })
  }

  return Promise.reject(error)

})

const app = new Vue({
  el: '#app',

  components: {
    App,
  },

  store,
  router,
  vuetify,
})
