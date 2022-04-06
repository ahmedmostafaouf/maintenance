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
        header: 'Branches Section',
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
                route: 'add-branch',
            },
        ],
    },
]
