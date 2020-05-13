import Vue from 'vue'
import VueRouter from 'vue-router'
import memberRouter from './modules/member'
// import Index from '@/views/Index.vue'
// import Member from '@/views/member/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', // 首页
    name: 'index',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/Index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login'),
    hidden: true,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/login/Register'),
    hidden: true,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/onlineOrder', // 在线下单
    name: 'OnlineOrder',
    component: () =>
      import('@/views/OnlineOrder.vue')
  },
  {
    path: '/logisticsTracking', // 物流追踪
    name: 'LogisticsTracking',
    component: () =>
      import('@/views/LogisticsTracking.vue')
  },
  {
    path: '/help', // 帮助中心
    name: 'Help',
    component: () => import('@/views/Help.vue')
  },
  {
    path: '/aboutUs', // 关于我们
    name: 'AboutUs',
    component: () => import('@/views/About.vue')
  },
  memberRouter // 个人中心模块
]
const router = new VueRouter({
  routes
})

export default router
