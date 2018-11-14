import VueRouter from 'vue-router';
import Login from './login'
import Home from './home';
import Category from './category';
import Cart from './cart';
import User from './user';

const routes = [
  ...Home,
  ...Login,
  ...Category,
  ...Cart,
  ...User
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
