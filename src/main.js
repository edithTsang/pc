import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import '../src/assets/css/global.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SvgIcon from './components/SvgIcon'
import Distpicker from 'v-distpicker'
import Cookies from 'js-cookie'
import JSEncrypt from 'jsencrypt'
import { Message } from 'element-ui'
import Router from 'vue-router'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 注册icon-svg
Vue.component('SvgIcon', SvgIcon)
Vue.component('v-distpicker', Distpicker)

Vue.prototype.$getRsaCode = function(str) { // 注册方法
  // ES6 模板字符串 引用 rsa 公钥
  const pubKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDM9NVgZFgikq7vUQ7rVX+RO6rG
27ohNkTA3n8I6ybdFvk8sZ2V4AdulAHaAphxCLjBtnDkwr5YBklzUkJYWAaqW2Nk
0Jil3ikjSqLlbjSrhGFjLfM2Sv4ne1Mro32/lkb63xT7B8idKysY2aFD0rFjTonF
c1Dfi46+6dLxLrUrwwIDAQAB
-----END PUBLIC KEY-----`
  const encryptStr = new JSEncrypt()
  encryptStr.setPublicKey(pubKey) // 设置 加密公钥
  const data = encryptStr.encrypt(str.toString()) // 进行加密
  return data
}
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (Cookies.get('token')) {
      next()
    } else {
      Message({
        message: '请先登录',
        type: 'error',
        duration: 3 * 1000
      })
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size

})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
