<?php

namespace App\Http\Resources\Dashboard;

use Illuminate\Http\Resources\Json\JsonResource;

class MaintenanceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $service=$this->services->pluck('name')->toArray();

        return [
            'id' => $this->id,
            'name' => @$this->name,
            'service' => @implode(',',$service),
            'desc' => ($this->desc)??'لا يوجد وصف',
            'status' => $this->status,
            'created_at' => $this->created_at,
        ];
    }
}
