<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\MaintenanceOrderRequest;
use App\Http\Resources\Dashboard\MaintenanceOrderResource;
use App\Http\Traits\ResponseTrait;
use App\Models\Maintenance;
use App\Models\MaintenanceOrder;
use App\Models\RequestStock;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;

class MaintenanceOrderController extends Controller
{
    use ResponseTrait;
    /** return orders
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'read maintenance_orders')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $maintenance = MaintenanceOrder::filter($request);
        return MaintenanceOrderResource::collection($maintenance);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param MaintenanceOrderRequest $request
     * @return Application|Response|ResponseFactory
     */
    public function store(MaintenanceOrderRequest $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'write maintenance_orders')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $data = self::handleFormData($request);
        if (isset($request->image)){
            $data['image'] = imageUpload($request->image, 'orders');
        }

        MaintenanceOrder::create($data);
        $this->returnSuccessMessage('تم انشاء طلب الصيانة بنجاح');
    }

    public function handleFormData($request){
        return [
            'maintenance_id' => $request->maintenance_id,
            'service_id' => $request->service_id,
            'department_id' => $request->department_id,
            'location' => $request->location,
            'desc' => $request->desc,
            'type' => $request->type,
            'device_id' => $request->type==Maintenance::MAINTENANCE_HAS_DEVICES_TYPE ? $request->related_data : NULL,
            'car_id' => $request->type==Maintenance::MAINTENANCE_HAS_CARS_TYPE ? $request->related_data : NULL,
        ];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return Application|Response|ResponseFactory
     */
    public function edit($id)
    {

        if (auth('sanctum')->user()->cannot('admin', 'update maintenance_orders')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }

        return new MaintenanceOrderResource( MaintenanceOrder::find($id) );
    }
    public function getMaintanance(Request $request, $id){

        $maintenance=MaintenanceOrder::findOrFail($id);
        $maintenance->update(['technical_id'=>$request->technical,'status'=>1]);
        $this->returnSuccessMessage('تم تكليف فني بنجاح');

    }

    /**
     * Update the specified resource in storage.
     *
     * @param MaintenanceOrderRequest $request
     * @param int $id
     * @return Response|Application|ResponseFactory
     */
    public function update(MaintenanceOrderRequest $request, $id)
    {
        if (auth('sanctum')->user()->cannot('admin', 'update maintenance_orders')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $maintenanceOrder = MaintenanceOrder::find($id);
        $data = self::handleFormData($request);
        if (isset($request->image))
            $data['image'] = imageUpload($request->image, 'orders');

        $maintenanceOrder->update($data);

        $this->returnSuccessMessage('تم تعديل طلب الصيانة بنجاح');
    }

    /**bulkDelete
     * @param $ids
     * @return array
     */
    public function bulkDelete($ids)
    {
        MaintenanceOrder::whereIn('id',explode(',',$ids))->delete();
        return $this->returnSuccessMessage('تم الحذف بنجاح');
    }

    public function bulkChangeStatus( Request $request)
    {
        $request->validate(['status' => 'required|numeric']);
        MaintenanceOrder::whereIn('id', $request->ids)
                        ->update(['status' => $request->status, 'comment' => $request->comment,'request_stocks'=>$request->request_stocks]);
        RequestStock::whereIn("id",$request->request_stocks)->update(['wait'=>0]);               
        return $this->returnSuccessMessage('تم التعديل بنجاح');
    }
}
