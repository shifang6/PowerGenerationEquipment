import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */

/**
 // 当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 hidden: true // (默认 false)

 //当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 redirect: 'noRedirect'

 // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 alwaysShow: true

 name: 'router-name' // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 meta: {
  roles: ['admin', 'editor'] // 设置该路由进入的权限，支持多个权限叠加
  title: 'title' // 设置该路由在侧边栏和面包屑中展示的名字
  icon: 'svg-name' // 设置该路由的图标，支持 svg-class，也支持 el-icon-x element-ui 的 icon
  noCache: true // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
  breadcrumb: false //  如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)
  affix: true // 如果设置为true，它则会固定在tags-view中(默认 false)

  // 当路由设置了该属性，则会高亮相对应的侧边栏。
  // 这在某些场景非常有用，比如：一个文章的列表页路由为：/article/list
  // 点击文章进入文章详情页，这时候路由为/article/1，但你想在侧边栏高亮文章列表的路由，就可以进行如下设置
  activeMenu: '/article/list'
}
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    // path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/home',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/404',
    meta: { title: '404' },
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    meta: { title: '40' },
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: () => import('@/views/Index/index'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home/index'),
        name: 'home',
        meta: { title: '首页' }
      },
      {
        path: 'home-dynamic',
        component: () => import('@/views/HomeDynamic/index'),
        name: 'home-dynamic',
        meta: { title: '中国工业机器人市场' }
      },
      {
        path: 'home-data',
        component: () => import('@/views/HomeData'),
        name: 'home-data',
        meta: { title: '数据' }
      },
      {
        path: 'home-report',
        component: () => import('@/views/HomeReport'),
        name: 'home-report',
        meta: { title: '报告' }
      },
      {
        path: 'home-public-opinion',
        component: () => import('@/views/HomePublicOpinion'),
        name: 'home-public-opinion',
        meta: { title: '舆情' }
      },
      {
        path: 'home-search',
        component: () => import('@/views/HomeSearch'),
        name: 'home-search',
        meta: { title: '搜索' }
      },
      {
        path: 'home-company',
        component: () => import('@/views/HomeCompany'),
        name: 'home-company',
        meta: { title: '企业' }
      },
      {
        path: 'home-vip',
        component: () => import('@/views/HomeVip'),
        name: 'home-vip',
        meta: { title: '会员' }
      },
      {
        path: 'home-my',
        component: () => import('@/views/HomeMy'),
        name: 'home-my',
        meta: { title: '我的' }
      },
      {
        path: 'home-gongye',
        component: () => import('@/views/HomeGongye'),
        name: 'home-gongye',
        meta: { title: '中国工业机器人市场' }
      },
      {
        path: 'home-xiangqing',
        component: () => import('@/views/HomeFenXi/back2'),
        name: 'home-xiangqing',
        meta: { title: '美的集团长期战略' }
      },
      {
        path: 'home-xiangqing2',
        component: () => import('@/views/HomeXiangqing/back'),
        name: 'home-xiangqing2',
        meta: { title: '美的集团长期战略' }
      },
      {
        path: 'home-baogaodeail',
        component: () => import('@/views/HomeBaoGaoDeail'),
        name: 'home-baogaodeail',
        meta: { title: '行业发展现状报告详情' }
      },
      {
        path: 'home-fenxi',
        component: () => import('@/views/HomeFenXi'),
        name: 'home-fenxi',
        meta: { title: '报告详细' }
      },
      {
        path: 'home-fenxi2',
        component: () => import('@/views/HomeFenXi/back'),
        name: 'home-fenxi2',
        meta: { title: '报告详细' }
      },
      {
        path: 'home-anchuan',
        component: () => import('@/views/HomeAnchuan'),
        name: 'home-anchuan',
        meta: { title: '上海电气详情页' }
      },
      {
        path: 'home-gengduo',
        component: () => import('@/views/HomeGengduo'),
        name: 'home-gengduo',
        meta: { title: '更多企业' }
      },
      {
        path: 'home-poilcy',
        component: () => import('@/views/HomePoilcy'),
        name: 'home-poilcy',
        meta: { title: '政策' }
      },
      {
        path: 'home-daping',
        component: () => import('@/views/Homedaping'),
        name: 'home-daping',
        meta: { title: '可视化' }
      },
      {
        path: 'home-hot',
        component: () => import('@/views/hotPie'),
        name: 'home-hot',
        meta: { title: '火电' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export const asyncRoutes = []

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
