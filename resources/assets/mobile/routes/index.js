import VueRouter from 'vue-router';
import User from './user'
const routes = [
  ...User
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
