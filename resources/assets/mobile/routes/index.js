import VueRouter from 'vue-router';
import Login from './login'
import Home from './home';
// import Category from './category';
const routes = [
  ...Home,
  ...Login
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
