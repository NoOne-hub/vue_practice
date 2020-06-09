// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'

import goods from './components/sellers/goods/goods'
import ratings from './components/sellers/ratings/ratings'
import seller from './components/sellers/seller/seller'

import "./common/stylus/index.styl";
Vue.use(Router)
Vue.config.productionTip = false

//定义路由页面

const routes = [
  { path: '/goods', components: goods},
  { path: '/ratings', components: ratings},
  { path: '/seller', components: seller}
]
const router = new Router({
    routes
})




let app = new Vue({
    el: '#app',
    router,
    //渲染视图
    render: h => h(App)
})

Vue.use({
  app
})