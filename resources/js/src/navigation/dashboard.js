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
        header: 'مستخدمو النظام',
    },
    {
        title: 'الموظفين',
        icon: 'PackageIcon',
        allows: (gate.hasPermission('read users') || gate.hasPermission('write users')),
        children: [
            {
                title: 'الموظفين',
                route: 'employees',
                allows: gate.hasPermission('read users')
            },
            {
                title: 'اصافة موظف',
                route: 'add-employee',
                allows: gate.hasPermission('write users')
            },
        ],
    },
  {
    header: 'الرتب والصلاحيات',
  },
  {
    title: 'الرتب',
    icon: 'AlertCircleIcon',
    allows: (gate.hasPermission('read roles') || gate.hasPermission('write roles')),
    children: [
      {
        title: 'الرتب',
        route: 'roles',
        allows:gate.hasPermission('read roles'),
      },
      {
        title: 'اضافة رتبة',
        route: 'assign-role',
        allows:gate.hasPermission('write roles'),
      },
    ],
  },
  {
    header: 'System_Setup',
  },
    {
        title: ' انواع الصيانة',
        icon: 'PackageIcon',
        allows: (gate.hasPermission('read maintenance') || gate.hasPermission('write maintenance')),
        children: [
          {
            title: ' انوع الصيانة',
            route: 'maintenance',
            allows: gate.hasPermission('read maintenance')
          },
          {
            title: 'اضافة نوع صيانة',
            route: 'add-maintenance',
            allows: gate.hasPermission('write maintenance')
          },
        ],
    },
    {
        title: 'الخدمات',
        icon: 'PackageIcon',
        allows: (gate.hasPermission('read service') || gate.hasPermission('write service')),
        children: [
            {
                title: 'الخدمات',
                route: 'service',
                allows: gate.hasPermission('read service')
            },
            {
                title: 'اضافة خدمه',
                route: 'add-service',
                allows: gate.hasPermission('write service')
            },
        ],
    },
    {
        title: 'الاقسام',
        icon: 'PackageIcon',
        allows: (gate.hasPermission('read department') || gate.hasPermission('write department')),
        children: [
            {
                title: 'الاقسام',
                route: 'department',
                allows: gate.hasPermission('read department')
            },
            {
                title: 'اضافة قسم',
                route: 'add-department',
                allows: gate.hasPermission('write department')
            },
        ],
    },
    {
        title: 'الاجهزة',
        icon: 'PackageIcon',
        allows: (gate.hasPermission('read device') || gate.hasPermission('write device')),
        children: [
            {
                title: 'الاجهزة',
                route: 'device',
                allows: gate.hasPermission('read device')
            },
            {
                title: 'اضافة جهاز',
                route: 'add-device',
                allows: gate.hasPermission('write device')
            },
        ],
    },

    //stock
    {
        title: 'المحزون',
        icon: 'PackageIcon',
        allows: (gate.hasPermission('read stock') || gate.hasPermission('write stock')),
        children: [
            {
                title: 'المخزون',
                route: 'stock',
                allows: gate.hasPermission('read stock')
            },
            {
                title: 'اضافة الي المخزن',
                route: 'add-stock',
                allows: gate.hasPermission('write stock')
            },
        ],
    },
    //car
    {
        title: 'السيارات',
        icon: 'PackageIcon',
        allows: (gate.hasPermission('read car') || gate.hasPermission('write car')),
        children: [
            {
                title: 'السيارات',
                route: 'car',
                allows: gate.hasPermission('read car')
            },
            {
                title: 'اضافة سيارة',
                route: 'add-car',
                allows: gate.hasPermission('write car')
            },
        ],
    },
    //car
    {
        title: 'الفنيين',
        icon: 'PackageIcon',
        allows: (gate.hasPermission('read technical') || gate.hasPermission('write technical')),
        children: [
            {
                title: 'الفنيين',
                route: 'technical',
                allows: gate.hasPermission('read technical')
            },
            {
                title: 'اضافة فني',
                route: 'add-technical',
                allows: gate.hasPermission('write technical')
            },
        ],
    },
    //category
    {
        title: 'اقسام الانظمة',
        icon: 'PackageIcon',
        allows: (gate.hasPermission('read category') || gate.hasPermission('write category')),
        children: [
            {
                title: 'اقسام الانظمة',
                route: 'category',
                allows: gate.hasPermission('read category')
            },
            {
                title: 'اضافة قسم للنظام',
                route: 'add-category',
                allows: gate.hasPermission('write category')
            },
        ],
    },
    //systems
    {
        title: 'الانظمة',
        icon: 'PackageIcon',
        allows: (gate.hasPermission('read system') || gate.hasPermission('write system')),
        children: [
            {
                title: 'الانظمة',
                route: 'system',
                allows: gate.hasPermission('read system')
            },
            {
                title: 'اضافة نظام',
                route: 'add-system',
                allows: gate.hasPermission('write system')
            },
        ],
    },
    //security announcement
    {
        title: 'التصريحات الامنيه',
        icon: 'PackageIcon',
        allows: (gate.hasPermission('read securities') || gate.hasPermission('write securities')),
        children: [
            {
                title: 'التصريحات الامنيه',
                route: 'securities',
                allows: gate.hasPermission('read securities')
            },
            {
                title: 'اضافة تصريح امني',
                route: 'add-securities',
                allows: gate.hasPermission('write securities')
            },
            {
                title: 'تعديل  تصريح امني',
                route: 'edit-securities',
                allows: gate.hasPermission('update securities')
            }
        ],
    },


]
