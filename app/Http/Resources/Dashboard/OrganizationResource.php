<?php

namespace App\Http\Resources\Dashboard;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrganizationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'logo' =>'/images/organization/logo/'.$this->logo?? '..',
            'qr_code' =>'/images/organization/qrcode/'.$this->qr_code?? '..',
            'email' =>$this->email,
            'phone' =>$this->phone,
            'website_url' =>$this->website_url,
            'lat' =>$this->lat,
            'long' =>$this->long,
            'desc' =>$this->desc,
            'address' =>$this->address,
            'temp_msg' =>$this->temp_msg,
            'token' =>$this->token,
            'instance_id' =>$this->instance_id,
            'status'=>$this->status,
            'created_at' =>$this->created_at,
        ];
    }
}
