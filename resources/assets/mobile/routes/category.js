const Category = () => import('../views/category')
export default [
  {
    path: '/mobile/category',
    title: 'category',
    name: 'category',
    meta: {
      requireAuth: true
    },
    component:Category,
  }
]
