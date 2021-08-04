import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/auth/Login.vue'
import Home from './views/admin/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    redirect: 'dashboard/login'
  },

  {
    path: '/dashboard/login',
    component: Login,
    name: 'Login',
  },

  {
    path: '/dashboard/home',
    component: Home,
    name: 'Home',
  },
]

export default new VueRouter({
  mode: 'history',
  routes
})
