import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
const Login = () =>import(/* webpackChunkName:  "Login"*/ './pages/auth/Login.vue')
const Home = () =>import(/* webpackChunkName:  "Home"*/ './pages/admin/Home.vue')


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/dashboard',
  //   redirect: 'dashboard/login'
  // },

  {
    path: '/dashboard/login',
    component: Login,
    name: 'login',
    meta: { guest: true }
  },

  {
    path: '/dashboard/home',
    component: Home,
    name: 'home',
    meta: { requiresAuth: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (!store.getters["auth/isAuthenticated"]) next({ name: 'login' })
    else next()

  } else if (to.matched.some(record => record.meta.guest)) {

    if (!store.getters["auth/isAuthenticated"]) next()
    else next({ name: 'home' })

  } else {
    next();
  }
});

export default router;
