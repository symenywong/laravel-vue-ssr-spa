import VueRouter from 'vue-router';
const Layout = () => import('../views/layout/index');
import Login from './login';
import Home from './home';
import Goods from './goods';
import Members from './members';
import Settings from './settings';
import Orders from './orders';

const routes = [
  {
    path: '/admin/',
    title: 'admin首页',
    name: 'admin_index',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children:[
    ...Home,
    ...Goods,
    ...Members,
    ...Settings,
    ...Orders
    ],
  },
  ...Login
]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router
