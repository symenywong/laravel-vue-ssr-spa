const Goods = () => import('../views/goods');
export default [
  {
    path: '/admin/goods',
    title: '商品',
    name: '_admin_goods',
    meta: {
      requireAuth: true
    },
    component: Goods,
    // children:[{
    //   path: '/admin/goods',
    //   title: '商品列表',
    //   name: 'admin_goods',
    //   component:Goods
    // }],
  }
]
