export default [
  {
    title: 'Dashboards',
    route: 'apps-email',
    icon: 'HomeIcon',
  },

  {
    header: 'Roles_Permissions',
  },
  {
    title: 'Roles_Section',
    icon: 'AlertCircleIcon',
    children: [
      {
        title: 'Roles',
        route: 'roles',
      },
      {
        title: 'Assign_Roles',
        route: 'assign-role',
      },
    ],
  },
  {
    header: 'System_Setup',
  },
  {
    title: 'Organizations',
    icon: 'CopyIcon',
    children: [
      {
        title: 'Organizations',
        route: 'organizations',
      },
      {
        title: 'Add_organization',
        route: 'add-organization',
      },
      {
        title: 'Show_organization',
        route: 'show-organization',
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
                title: 'Add_Branch',
                route: 'add-branch',
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
        title: 'Add_Department',
        route: 'add-department',
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
        title: 'Add_Services',
        route: 'add-service',
      },
    ],
  },

]
