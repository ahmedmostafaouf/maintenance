<?php

namespace App\Http\Resources\Dashboard;

use App\Http\Controllers\Dashboard\SpinnersControler;
use App\Models\Maintenance;
use App\Models\MaintenanceOrder;
use Illuminate\Http\Client\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MaintenanceOrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        if ($request->route()->getName() == "maintenance-orders.edit") {
            $data = [
                'maintenance_id'=>$this->maintenance_id,
                'service_id' => $this->service_id,
                'department_id' => $this->department_id,
                'location' => $this->location,
                'desc' => $this->desc,
                'type' => $this->type,
                'related_data' => ($this->type== Maintenance::MAINTENANCE_HAS_CARS_TYPE)? $this->car_id : $this->device_id,
                'filePreview' => asset('orders/' . $this->image),
            ];
        } else {
            $data='';
            if(!$this->car?->type){
                $data=$this->department->name;
            }else{
                  if($this->department_id==1){
                    $data="اسعافات";
                  }else{
                    $data="حركة";
                  }
            }
            $data = [
                'id' => $this->id,
                'maintenance_type' => $this->maintenance->name,
                'department' => $data,
                'service' => $this->service->name,
                'device' => $this->device?->name ?? '...',
                'car' => $this->car?->type ?? '...',
                'location' => $this->location,
                'order_status' => $this->currentStatus(),
                'image' => asset('orders/' . $this->image)
            ];
        }
        return $data;
    }
}
