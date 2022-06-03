export default [
  {
    path: '/dashboard/',
    name: 'dashboard',
    component: () => import('@/views/dashboard/homepage/Index.vue'),
  },

    {
        path: '/dashboard/employees',
        name: 'employees',
        component: () => import('@/views/dashboard/employee/index.vue'),
    },
    {
        path: '/dashboard/employee/:id/edit',
        name: 'edit-employee',
        component: () => import('@/views/dashboard/employee/edit-employee.vue'),
    },
    {
        path: '/dashboard/employee/:id/show',
        name: 'view-employee',
        component: () => import('@/views/dashboard/employee/view.vue'),
    },
    {
        path: '/dashboard/add-employee',
        name: 'add-employee',
        component: () => import('@/views/dashboard/employee/add-employee.vue'),
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
    path: '/dashboard/roles/:id/edit',
    name: 'edit-role',
    component: () => import('@/views/dashboard/roles/edit.vue'),
  },
  {
    path: '/dashboard/department',
    name: 'department',
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
        path: '/dashboard/device',
        name: 'device',
        component: () => import('@/views/dashboard/device/index.vue'),
    },
    {
        path: '/dashboard/device/:id/edit',
        name: 'edit-device',
        component: () => import('@/views/dashboard/device/edit-device.vue'),
    },
    {
        path: '/dashboard/add-device',
        name: 'add-device',
        component: () => import('@/views/dashboard/device/add-device.vue'),
    },

    {
        path: '/dashboard/maintenance',
        name: 'maintenance',
        component: () => import('@/views/dashboard/maintenance/index.vue'),
    },
    {
        path: '/dashboard/maintenance/:id/edit',
        name: 'edit-maintenance',
        component: () => import('@/views/dashboard/maintenance/edit-maintenance.vue'),
    },
    {
        path: '/dashboard/add-maintenance',
        name: 'add-maintenance',
        component: () => import('@/views/dashboard/maintenance/add-maintenance.vue'),
    },

    //car
    {
        path: '/dashboard/car',
        name: 'car',
        component: () => import('@/views/dashboard/car/index.vue'),
    },
    {
        path: '/dashboard/car/:id/edit',
        name: 'edit-car',
        component: () => import('@/views/dashboard/car/edit-car.vue'),
    },
    {
        path: '/dashboard/add-car',
        name: 'add-car',
        component: () => import('@/views/dashboard/car/add-car.vue'),
    },
    //technical
    {
        path: '/dashboard/technical',
        name: 'technical',
        component: () => import('@/views/dashboard/technical/index.vue'),
    },
    {
        path: '/dashboard/technical/:id/edit',
        name: 'edit-technical',
        component: () => import('@/views/dashboard/technical/edit-technical.vue'),
    },
    {
        path: '/dashboard/add-technical',
        name: 'add-technical',
        component: () => import('@/views/dashboard/technical/add-technical.vue'),
    },

    //category
    {
        path: '/dashboard/category',
        name: 'category',
        component: () => import('@/views/dashboard/category/index.vue'),
    },
    {
        path: '/dashboard/category/:id/edit',
        name: 'edit-category',
        component: () => import('@/views/dashboard/category/edit-category.vue'),
    },
    {
        path: '/dashboard/add-category',
        name: 'add-category',
        component: () => import('@/views/dashboard/category/add-category.vue'),
    },

    //category
    {
        path: '/dashboard/system',
        name: 'system',
        component: () => import('@/views/dashboard/system/index.vue'),
    },
    {
        path: '/dashboard/system/:id/edit',
        name: 'edit-system',
        component: () => import('@/views/dashboard/system/edit-system.vue'),
    },
    {
        path: '/dashboard/add-system',
        name: 'add-system',
        component: () => import('@/views/dashboard/system/add-system.vue'),
    },

    {
        path: '/dashboard/service',
        name: 'service',
        component: () => import('@/views/dashboard/service/index.vue'),
    },
    {
        path: '/dashboard/service/:id/edit',
        name: 'edit-service',
        component: () => import('@/views/dashboard/service/edit-service.vue'),
    },
    {
        path: '/dashboard/add-service',
        name: 'add-service',
        component: () => import('@/views/dashboard/service/add-service.vue'),
    },
    //stock
    {
        path: '/dashboard/stock',
        name: 'stock',
        component: () => import('@/views/dashboard/stock/index.vue'),
    },
    {
        path: '/dashboard/stock/:id/edit',
        name: 'edit-stock',
        component: () => import('@/views/dashboard/stock/edit-stock.vue'),
    },
    {
        path: '/dashboard/add-stock',
        name: 'add-stock',
        component: () => import('@/views/dashboard/stock/add-stock.vue'),
    },
    //securities
    {
        path: '/dashboard/securities',
        name: 'securities',
        component: () => import('@/views/dashboard/SecurityAnnouncement/index.vue'),
    },
    {
        path: '/dashboard/add-securities',
        name: 'add-securities',
        component: () => import('@/views/dashboard/SecurityAnnouncement/create.vue'),
    },
    {
        path: '/dashboard/securities/:id/edit',
        name: 'edit-securities',
        component: () => import('@/views/dashboard/SecurityAnnouncement/edit.vue'),
    },
    //Maintenance Orders
    {
        path: '/dashboard/maintenance-orders',
        name: 'maintenanceOrders',
        component: () => import('@/views/dashboard/MaintenanceOrders/index.vue'),
    },
    {
        path: '/dashboard/maintenance-orders/create',
        name: 'add-maintenanceOrders',
        component: () => import('@/views/dashboard/MaintenanceOrders/create.vue'),
    },
    {
        path: '/dashboard/maintenance-orders/:id/edit',
        name: 'edit-maintenanceOrders',
        component: () => import('@/views/dashboard/MaintenanceOrders/edit.vue'),
    },
]
