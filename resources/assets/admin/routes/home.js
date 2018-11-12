const Home = () => import('../views/home');
const Layout = () => import('../views/layout/index');
export default [
  {
    path: '/admin/',
    title: 'admin首页',
    name: 'admin_home_default',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children:[{
      path: '/admin/home',
      title: 'admin首页',
      name: 'admin_home',
      component:Home
    }],
  }
]
