<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Resources\Dashboard\MaintenanceOrderResource;
use App\Http\Resources\Dashboard\MaintenanceResource;
use App\Http\Traits\ResponseTrait;
use App\Models\Car;
use App\Models\Category;
use App\Models\Department;
use App\Models\Device;
use App\Models\Maintenance;
use App\Models\MaintenanceOrder;
use App\Models\Organization;
use App\Models\Role;
use App\Models\Service;
use App\Models\Stock;
use App\Models\User;
use Illuminate\Http\Request;

class SpinnersControler extends Controller
{

    use ResponseTrait;


    public function permissions()
    {
        return $this->returnData('permissions', permissions());
    }

    public function roles()
    {
        $roles = Role::select(['roleName as name', 'id'])->get();
        return $this->returnData('roles', $roles);
    }

    public function all_service()
    {
        $service = Service::select('id', 'name')->whereStatus('1')->get();
        return $this->returnData('service', $service);

    }

    public function departments()
    {
        $departments = Department::select('id', 'name')->whereStatus('1')->get();
        return $this->returnData('departments', $departments);

    }

    public function getStocks($status)
    {
        $departments = Stock::whereStatus($status)->get();
        return $this->returnData('stocks', $departments);

    }

    public function getusers()
    {
        $users = User::whereStatus(1)->where('role_id', '!=', 1)->get();
        return $this->returnData('users', $users);

    }

    public function getcategories($main_cat)
    {

        $categories = Category::where('main_cat', 1)->get();
        return $this->returnData('categories', $categories);

    }

    public function getMaincategories()
    {
        $categories = Category::where('parent', 0)->get();
        return $this->returnData('categories', $categories);

    }

    public function getBranchcategories($cat)
    {
        $categories = Category::where('parent', $cat)->get();
        return $this->returnData('categories', $categories);

    }

    public function getBranch2categories($cat)
    {
        $categories = Category::where('parent', $cat)->get();
        return $this->returnData('categories', $categories);

    }

    public function getMaintenanceTypes()
    {
        $maintenanceTypes = Maintenance::where('status', true)->get();
        return $this->returnData('maintenanceTypes', $maintenanceTypes);
    }

    public function getServicesInMaintenanceType($id)
    {
        $maintenance = Maintenance::with(['services'])->find($id);
        $related_data = match ((string)$maintenance->type) {
            Maintenance::MAINTENANCE_HAS_DEVICES_TYPE => Device::all(),
            Maintenance::MAINTENANCE_HAS_CARS_TYPE => Car::all(),
            default => [],
        };
        $maintenance['related_data'] = $related_data;
        return $this->returnData('maintenance', $maintenance);

    }

    public function getMaintenanceOrderStatus()
    {
        $status = [
            ['id' => MaintenanceOrder::WAITING_STATUS, 'name' => 'قيد الانتظار'],
            ['id' => MaintenanceOrder::IN_PROGRESS_STATUS, 'name' => 'جاري التنفيذ'],
            ['id' => MaintenanceOrder::IN_DONE_STATUS, 'name' => 'تم التنفيذ'],
            ['id' => MaintenanceOrder::HANGING_STATUS, 'name' => 'معلق'],
            ['id' => MaintenanceOrder::SUPLLY_DONE_STATUS, 'name' => 'بانتظار التوريد'],
            ['id' => MaintenanceOrder::SUPLLY_ALREADY_DONE_STATUS, 'name' => 'تم التوريد'],
        ];
        return $this->returnData('status', $status);
    }

    public function getStatisticsData()
    {

        $data = [
            'canShowOrders' => auth()->user()->role_id == User::ADMIN_ROLE,
            'welcome_msg' => "Welcome , " . auth()->user()->name,
            'orderStatistics' => self::getOrderStatistics()
        ];
        return $this->returnData('statistics', $data);
    }

    public function getOrderStatistics()
    {
        $all = MaintenanceOrder::count();
        $waiting = MaintenanceOrder::where('status', MaintenanceOrder::WAITING_STATUS)->count();
        $inProgress = MaintenanceOrder::where('status', MaintenanceOrder::IN_PROGRESS_STATUS)->count();
        $inDone = MaintenanceOrder::where('status', MaintenanceOrder::IN_DONE_STATUS)->count();
        $hanging = MaintenanceOrder::where('status', MaintenanceOrder::HANGING_STATUS)->count();
        $supplyDone = MaintenanceOrder::where('status', MaintenanceOrder::SUPLLY_DONE_STATUS)->count();
        $supplyAlreadyDone = MaintenanceOrder::where('status', MaintenanceOrder::SUPLLY_ALREADY_DONE_STATUS)->count();
        $statistics = [
            ['icon' => 'GitMergeIcon', 'color' => 'light-primary', 'count' => $all, 'subtitle' => 'كافه الطلبات', 'customClass' => 'mb-2 mb-sm-0'],
            ['icon' => 'AirplayIcon', 'color' => 'light-success', 'count' => $waiting, 'subtitle' => 'قيد الانتظار', 'customClass' => 'mb-2 mb-sm-0'],
            ['icon' => 'CreditCardIcon', 'color' => 'light-danger', 'count' => $inProgress, 'subtitle' => 'جاري التنفيذ', 'customClass' => 'mb-2 mb-sm-0'],
            ['icon' => 'CompassIcon', 'color' => 'light-warning', 'count' => $inDone, 'subtitle' => 'تم التنفيذ', 'customClass' => 'mb-2  mt-2 mb-xl-0'],
            ['icon' => 'CloudLightningIcon', 'color' => 'light-info', 'count' => $hanging, 'subtitle' => 'معلق', 'customClass' => 'mb-2 mt-2 mb-xl-0'],
            ['icon' => 'ServerIcon', 'color' => 'light-secondary', 'count' => $supplyDone, 'subtitle' => 'بانتظار التوريد', 'customClass' => 'mb-2 mt-2 mb-xl-0'],
            ['icon' => 'CommandIcon', 'color' => 'light-primary', 'count' => $supplyAlreadyDone, 'subtitle' => 'تم التوريد', 'customClass' => 'mb-2 mt-2 mb-xl-0'],
        ];
        return $statistics;
    }

    public function getNewMaintenanceOrders()
    {
        $maintenance = MaintenanceOrder::orderBy('id', 'DESC')->take(30)->get();
        return MaintenanceOrderResource::collection($maintenance);
    }

    public function getNewMaintenanceTypes()
    {
        $maintenance = Maintenance::orderBy('id', 'DESC')->get();
        return MaintenanceResource::collection($maintenance);
    }
}
