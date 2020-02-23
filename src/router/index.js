import Vue from 'vue'
import VueRouter from 'vue-router'

//1.安装VueRouter
Vue.use(VueRouter);

const Home = () => import('views/home/Home')
//2.配置路由信息
const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  }
]

//3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})

//4.导出
export default router