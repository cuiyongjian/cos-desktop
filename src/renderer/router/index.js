import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router

export default router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/layout/Index').default,
      children: [
        {
          path: 'upload',
          name: 'upload',
          component: require('@/pages/upload').default
        },
        {
          path: 'gallery/:slug',
          name: 'gallery',
          component: require('@/pages/gallery').default
        },
        {
          path: 'setting',
          name: 'setting',
          component: require('@/pages/setting').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// router.beforeEach(() => {
//   // 从 store 或 db 中读取判断是否设置了secretKey，否则就全部跳到 setting页面。
// })