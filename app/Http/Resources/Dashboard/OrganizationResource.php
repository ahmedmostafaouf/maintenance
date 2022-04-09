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
            'logo' =>@$this->logo?? '..',
            'email' =>$this->email,
            'phone' =>$this->phone,
            'website_url' =>$this->website_url,
            'lat' =>$this->lat,
            'long' =>$this->long,
            'created_at' =>$this->created_at,
        ];
    }
}
