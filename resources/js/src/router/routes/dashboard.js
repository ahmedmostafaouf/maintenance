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
    path: '/dashboard/add-organization',
    name: 'add-organization',
    component: () => import('@/views/dashboard/organizations/Create.vue'),
    meta: {
      title: 'Add Organization',
    },
  },
  {
    path: '/dashboard/show-organization',
    name: 'show-organization',
    component: () => import('@/views/dashboard/organizations/show.vue'),
    meta: {
      title: 'Show Organization',
    },
  },
  {
    path: '/dashboard/organizations/:id/edit',
    name: 'edit-organization',
    component: () => import('@/views/dashboard/organizations/Edit.vue'),
  },
  {
    path: '/dashboard/roles',
    name: 'roles',
    component: () => import('@/views/dashboard/roles/Index.vue'),
  },
  {
    path: '/dashboard/assign-role',
    name: 'assign-role',
    component: () => import('@/views/dashboard/roles/assignRole.vue'),
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
    path: '/dashboard/branch/:id/edit',
    name: 'edit-branch',
    component: () => import('@/views/dashboard/branches/edit.vue'),
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
    path: '/dashboard/services/create',
    name: 'add-service',
    component: () => import('@/views/dashboard/services/add.vue'),
  },
  {
    path: '/dashboard/services/:id/edit',
    name: 'edit-service',
    component: () => import('@/views/dashboard/services/edit.vue'),
  },
  {
    path: '/dashboard/profile/edit',
    name: 'edit-profile',
    component: () => import('@/views/dashboard/profile/index.vue'),
  },

]
