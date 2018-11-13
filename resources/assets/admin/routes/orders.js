const Orders = () => import('../views/orders');
export default [
  {
    path: '/admin/orders',
    title: '商品',
    name: '_admin_orders',
    meta: {
      requireAuth: true
    },
    component: Orders,
    // children:[{
    //   path: '/admin/goods',
    //   title: '商品列表',
    //   name: 'admin_goods',
    //   component:Goods
    // }],
  }
]
