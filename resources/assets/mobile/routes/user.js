const User = () => import('../views/user')
export default [
  {
    path: '/mobile/user',
    title: '购物车',
    name: 'user',
    meta: {
      requireAuth: true
    },
    component:User,
  }
]
