// auth user
let user = localStorage.getItem('userData');
// gate
import Gate from '../Gate';
let gate = new Gate(JSON.parse(user));
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
    title: 'Roles Section',
    icon: 'AlertCircleIcon',
    allows: (gate.hasPermission('read roles') || gate.hasPermission('write roles')),
    children: [
      {
        title: 'Roles',
        route: 'roles',
        allows:gate.hasPermission('read roles'),
      },
      {
        title: 'Assign Roles',
        route: 'assign-role',
        allows:gate.hasPermission('write roles'),
      },
    ],
  },
  {
    header: 'System Setup',
  },
  {
    title: 'Organizations',
    icon: 'CopyIcon',
    allows: (gate.hasPermission('read organizations') || gate.hasPermission('write organizations')),
    children: [
      {
        title: 'Organizations',
        route: 'organizations',
        allows:gate.hasPermission('read organizations')
      },
      {
        title: 'Add organization',
        route: 'add-organization',
        allows:gate.hasPermission('write organizations')
      },
    ],
  },
  {
    title: 'Department',
    icon: 'PackageIcon',
    allows: (gate.hasPermission('read departments') || gate.hasPermission('write departments')),
    children: [
      {
        title: 'Department',
        route: 'departments',
        allows: gate.hasPermission('read departments')
      },
      {
        title: 'Add Department',
        route: 'add-department',
        allows: gate.hasPermission('write departments')
      },
    ],
  },
  {
    title: 'Branches',
    icon: 'GitBranchIcon',
    allows: (gate.hasPermission('read branches') || gate.hasPermission('write branches')),
    children: [
      {
        title: 'Branch',
        route: 'branches',
        allows:gate.hasPermission('read branches'),
      },
      {
        title: 'Add Branch',
        route: 'add-branch',
        allows:gate.hasPermission('write branches'),
      },
    ],

  },
  {
    title: 'Services',
    icon: 'ServerIcon',
    allows: (gate.hasPermission('read services') || gate.hasPermission('write services')),
    children: [
      {
        title: 'Services',
        route: 'services',
        allows:gate.hasPermission('read services')
      },
      {
        title: 'Add Services',
        route: 'add-service',
        allows:gate.hasPermission('write services')
      },
    ],
  },

]
console.log(gate.hasPermission('write services'))
