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
  {
    path: '/dashboard/departments',
    name: 'departments',
    component: () => import('@/views/dashboard/departments/index.vue'),
  },
    {
        path: '/dashboard/branches',
        name: 'branches',
        component: () => import('@/views/dashboard/branches/index.vue'),
    },
]
