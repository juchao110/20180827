import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/*
 ****************************************首页模块****************************************
 */
// 首页
const Index = r => require.ensure([], () => r(require('../pages/index/index.vue')), 'index')

export default new Router({
  routes: [{
      path: '',
      redirect: '/index'
    },
    {
      path: '*',
      redirect: '/index'
    }, {
      path: '/index',
      component: Index
    }
  ]
})