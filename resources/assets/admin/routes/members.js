const Members = () => import('../views/members');
export default [
  {
    path: '/admin/members',
    title: '商品',
    name: '_admin_members',
    meta: {
      requireAuth: true
    },
    component: Members,
    // children:[{
    //   path: '/admin/goods',
    //   title: '商品列表',
    //   name: 'admin_goods',
    //   component:Goods
    // }],
  }
]
