const Cart = () => import('../views/cart')
export default [
  {
    path: '/mobile/cart',
    title: '购物车',
    name: 'cart',
    meta: {
      requireAuth: true
    },
    component:Cart,
  }
]
