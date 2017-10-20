import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import Home from '@/components/Home'
// import Practice from '@/components/practiceClub'
import SearchProduct from '@/components/searchProduct'
// import Mine from '@/components/mine'
// import Skin from '@/components/skin'
// import productDetail from '@/components/productDetail'
import hotTopic from '@/components/hotTopic'
import search from '@/components/search'
// import Setting from '@/components/setting'
// import Personal from '@/components/personal'
// import Register from '@/components/mine/register'
// import skinManage from '@/components/skin/skinManage'
// import findDetail from '@/components/practice/findDetail'
// import mxOrigin from '@/components/practice/mxOrigin'
// import articleDetail from '@/components/practice/articleDetail'
// import emptyBottle from '@/components/practice/emptyBottle'
// import makeUp from '@/components/practice/makeUp'
// import hotTopicList from '@/components/practice/hotTopicList'

// import返回promise对象利用webpack代码分割达到路由懒加载的效果
//产品详情
const productDetail = () => import(/* webpackChunName:"group-product" */ '../components/productDetail.vue')
//修行社
const Practice = ()=> import(/* webpackChunName:"group-practice" */ '../components/practiceClub.vue')
const hotTopicList = ()=> import(/* webpackChunName:"group-practice" */ '../components/practice/hotTopicList.vue')
const makeUp = ()=> import(/* webpackChunName:"group-practice" */ '../components/practice/makeUp.vue')
const emptyBottle = ()=> import(/* webpackChunName:"group-practice" */ '../components/practice/emptyBottle.vue')
const mxOrigin = ()=> import(/* webpackChunName:"group-practice" */ '../components/practice/mxOrigin.vue')
const articleDetail = ()=> import(/* webpackChunName:"group-practice" */ '../components/practice/articleDetail.vue')
const findDetail = ()=> import(/* webpackChunName:"group-practice" */ '../components/practice/findDetail.vue')
//我的
const Mine = ()=>import(/* webpackChunName:"group-mine" */ '../components/mine.vue')
const Register = ()=>import(/* webpackChunName:"group-mine" */ '../components/mine/register.vue')
const Setting = ()=>import(/* webpackChunName:"group-mine" */ '../components/setting.vue')
const Personal = ()=>import(/* webpackChunName:"group-mine" */ '../components/personal.vue')
//肤质
const Skin = ()=>import(/* webpackChunName:"group-skin" */ '../components/skin.vue')
const skinManage = ()=>import(/* webpackChunName:"group-skin" */ '../components/skin/skinManage.vue')



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nav',
      component: Nav,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: 'practice',
          name: 'practice',
          component: Practice
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine
        },
        {
          path: 'personal',
          name: 'personal',
          component: Personal
        },
        {
          path: 'skin',
          name: 'skin',
          component: Skin
        },
        {
          path: 'skinManage',
          name: 'skinManage',
          component: skinManage
        }
      ]
    },
    {
      path: '/SearchProduct',
      name: 'searchProduct',
      component: SearchProduct
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    },
    {
      path: '/hotTopic',
      name: 'hotTopic',
      component: hotTopic
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta: {notKeepAlive: true}
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/findDetail',
      name: 'findDetail',
      component: findDetail
    },
    {
      path: '/mxOrigin',
      name: 'mxOrigin',
      component: mxOrigin
    },
    {
      path: '/articleDetail',
      name: 'articleDetail',
      component: articleDetail
    },
    {
      path: '/emptyBottle',
      name: 'emptyBottle',
      component: emptyBottle
    },
    {
      path: '/makeUp',
      name: 'makeUp',
      component: makeUp
    },
    {
      path: '/hotTopicList',
      name: 'hotTopicList',
      component: hotTopicList
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
  ]
})
