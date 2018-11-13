const Settings = () => import('../views/settings');
export default [
  {
    path: '/admin/settings',
    title: '商品',
    name: '_admin_settings',
    meta: {
      requireAuth: true
    },
    component: Settings,
    // children:[{
    //   path: '/admin/goods',
    //   title: '商品列表',
    //   name: 'admin_goods',
    //   component:Goods
    // }],
  }
]
