<?php

namespace App\Http\Resources\Dashboard;

use Illuminate\Http\Resources\Json\JsonResource;

class DeviceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return[
            'id' => $this->id,
            'name'=>$this->name,
            'desc'=>$this->desc??'لا يوجد وصف',
            'status'=>$this->status,
            'device_num'=>$this->device_num,
            'serial_num'=>$this->serial_num,
            'category'=>$this->category,
            'model'=>$this->model,
            'manufacturer_comp'=>$this->manufacturer_comp,
            'agent'=>$this->agent,
            'department'=>@$this->department->name,
            'created_at'=>$this->created_at,
        ];
    }
}
