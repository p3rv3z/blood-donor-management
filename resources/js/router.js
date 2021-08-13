import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
const Login = () =>import(/* webpackChunkName:  "Login"*/ './pages/auth/Login.vue')
const AppLayout = () =>import(/* webpackChunkName:  "Admin"*/ './pages/App/Layout')
const AppDashboard = () =>import(/* webpackChunkName:  "Dashboard"*/ './components/App/Dashboard.vue')
const DonersIndex = () =>import(/* webpackChunkName:  "DonersIndex"*/ './components/Doners/Index.vue')


Vue.use(VueRouter)

const routes = [

  {
    path: '/app/login',
    component: Login,
    name: 'login',
    meta: { guest: true }
  },

  {
    path: '/app',
    component: AppLayout,
    name: 'app.layout',
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        component: AppDashboard,
        name: 'app.dashboard',
      },
      {
        path: 'doners',
        component: DonersIndex,
        name: 'doners.index',
      }
    ]
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
    else next({ name: 'app.dashboard' })

  } else {
    next();
  }
});

export default router;
