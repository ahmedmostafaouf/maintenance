<?php

namespace App\Http\Resources\Dashboard;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class CarResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'category'=>$this->type==1?'اسعافات' : 'حركة',
            'name'=>$this->type,
            'plate_number'=>$this->plate_number,
            'chassis_number'=>$this->chassis_number,
            'color'=>$this->color,
            'made'=> Carbon::parse($this->made)->format('Y-m-d'),
            'created_at'=>$this->created_at,
            'user_id'=>@$this->user->name ?? '..',
        ];
    }
}
