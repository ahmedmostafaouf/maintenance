export default [
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/pages/error/Error404.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      action: 'read',
    },
  },
  {
    path: '/login',
    name: 'auth-login',
    component: () => import('@/views/pages/login/index.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
    {
    path: '/forget',
    name: 'auth-forgot-password',
    component: () => import('@/views/pages/forget/index.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
    {
    path: '/reste-passeod',
    name: 'auth-reset-password',
    component: () => import('@/views/pages/forget/reset.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
]
