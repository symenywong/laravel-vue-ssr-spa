import VueRouter from 'vue-router';
import User from './user';
import Home from './home'
const routes = [
  ...User,
  ...Home
]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router
