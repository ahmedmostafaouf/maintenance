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
    header: 'Departments',
  },
  {
    title: 'Department',
    icon: 'AlertCircleIcon',
      children: [
          {
              title: 'Department',
              route: 'departments',
          },
          {
              title: 'Add Department',
              route: '',
          },
          ]
  },
    {
        header: 'Branches',
    },
    {
        title: 'Branches',
        icon: 'AlertCircleIcon',
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
]
