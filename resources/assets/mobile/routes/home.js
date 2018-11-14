const Index = () => import('../views/index')
export default [
  {
    path: '/mobile/index',
    title: 'mobile首页',
    name: '_index',
    meta: {
      requireAuth: true
    },
    component:Index,
  },
  {
    path: '/mobile/',
    title: 'mobile首页',
    name: 'index',
    meta: {
      requireAuth: true
    },
    component:Index,
  },
]
