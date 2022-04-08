export default [
  {
    title: 'Dashboards',
    route: 'apps-email',
    icon: 'HomeIcon',
  },

  {
    header: 'Roles & Permissions',
  },
  {
    title: 'Roles',
    icon: 'AlertCircleIcon',
    route: 'dashboard-roles',
  },
  {
    header: 'System Setup',
  },
  {
    title: 'Organization',
    icon: 'CopyIcon',
    children: [
      {
        title: 'Organization',
        route: 'organizations',
      },
      {
        title: 'Add organization',
        route: 'add-organization',
      },
    ],
  },
  {
    title: 'Department',
    icon: 'PackageIcon',
    children: [
      {
        title: 'Department',
        route: 'departments',
      },
      {
        title: 'Add Department',
        route: 'add-department',
      },
    ],
  },
  {
    title: 'Branches',
    icon: 'GitBranchIcon',
    children: [
      {
        title: 'Branch',
        route: 'branches',
      },
      {
        title: 'Add Branch',
        route: 'add-branch',
      },
    ],
  },
  {
    title: 'Services',
    icon: 'ServerIcon',
    children: [
      {
        title: 'Services',
        route: 'services',
      },
      {
        title: 'Add Services',
        route: '',
      },
    ],
  },

]
