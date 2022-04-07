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
    header: 'Controle Departments',
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
    header: 'Controle Branches',
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
            route: '',
        },
    ],
   },
   {
    header: 'Controle Services',
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
