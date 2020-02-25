import Vue from 'vue'
import VueRouter from 'vue-router'

//1.安装VueRouter
Vue.use(VueRouter);

const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Category = () => import('views/category/Category')
//2.配置路由信息
const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/cart',
    component: Cart
  }, {
    path: '/profile',
    component: Profile
  }, {
    path: '/category',
    component: Category
  }
]

//3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})

//4.导出
export default router