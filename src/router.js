import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import User from './components/User.vue'
import Order from './components/Order.vue'
import Pay from './components/Pay.vue'
Vue.use(Router)

export default new Router({
  // mode:"history",
  routes: [
    {
      path: '*',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay
    }
  ]
})
