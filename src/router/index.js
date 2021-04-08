import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DataShow',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataShow.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
