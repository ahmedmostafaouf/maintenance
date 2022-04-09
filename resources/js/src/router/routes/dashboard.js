export default [
  {
    path: '/dashboard/',
    name: 'dashboard',
    component: () => import('@/views/dashboard/homepage/Index.vue'),
  },
  {
    path: '/dashboard/organizations',
    name: 'organizations',
    component: () => import('@/views/dashboard/organizations/Index.vue'),
    meta: {
      title: 'Organizations',
    },
  },
  {
    path: '/dashboard/organizations-add',
    name: 'add-organization',
    component: () => import('@/views/dashboard/organizations/Create.vue'),
    meta: {
      title: 'Add Organization',
    },
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
    path: '/dashboard/department/:id/edit',
    name: 'edit-department',
    component: () => import('@/views/dashboard/departments/edit-department.vue'),
  },
  {
    path: '/dashboard/add-department',
    name: 'add-department',
    component: () => import('@/views/dashboard/departments/add-department.vue'),
  },
  {
    path: '/dashboard/branches',
    name: 'branches',
    component: () => import('@/views/dashboard/branches/index.vue'),
  },
  {
    path: '/dashboard/branches/add-branch',
    name: 'add-branch',
    component: () => import('@/views/dashboard/branches/add-branch.vue'),
  },
  {
    path: '/dashboard/services',
    name: 'services',
    component: () => import('@/views/dashboard/services/index.vue'),
    meta: {
      title: 'services',
    },
  },
  {
    path: '/dashboard/services/:id/edit',
    name: 'edit-service',
    component: () => import('@/views/dashboard/services/edit.vue'),
  },
  {
    path: '/dashboard/branch/:id/edit',
    name: 'edit-branch',
    component: () => import('@/views/dashboard/branches/edit.vue'),
  },

]
