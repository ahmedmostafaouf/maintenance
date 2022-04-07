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
    header: 'Departments Section',
  },
  {
    title: 'Departments',
    icon: 'LayersIcon',
    children: [
        {
            title: 'Departments',
            route: 'departments',
        },
        {
          title: 'Add Department',
          route: '',
        },
    ]
  },
  {
    header: 'Branches Section',
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
    header: 'Services Section',
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
