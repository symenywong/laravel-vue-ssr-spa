const Login = () => import('../views/login')
export default [
  {
    path: '/mobile/login',
    title: '登陆',
    name: 'admin_login',
    meta: {
      requireAuth: true
    },
    component: Login
  },{
    name: 'login',
    path: '/',
    component: Login,
    meta: {
      requireGust: true
    }
  },
]
