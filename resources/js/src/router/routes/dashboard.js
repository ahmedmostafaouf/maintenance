export default [
  {
    path: '/dashboard/',
    name: 'dashboard',
    component: () => import('@/views/dashboard/homepage/Index.vue'),
  },
  {
    path: '/dashboard/roles',
    name: 'dashboard',
    component: () => import('@/views/dashboard/roles/Index.vue'),
  },
]
