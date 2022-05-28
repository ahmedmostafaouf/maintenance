<?php

namespace App\Http\Resources\Dashboard;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SecurityResource extends JsonResource
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
            'department' => $this->department->name,
            'visitor_name' => $this->visitor_name,
            'company_name' => $this->company_name,
            'securityStatus' => $this->status,
            'responsible' => $this->responsible,
            'working_duration' => $this->working_duration,
        ];
    }
}
