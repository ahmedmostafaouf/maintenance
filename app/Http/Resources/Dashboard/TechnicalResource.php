<?php

namespace App\Http\Resources\Dashboard;

use Illuminate\Http\Resources\Json\JsonResource;

class TechnicalResource extends JsonResource
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
            'jop'=>$this->jop,
            'name'=>$this->name,
            'status'=>$this->user_id,
            'created_at'=>$this->created_at,
            'user_id'=>@$this->user->name ?? '..',
        ];
    }
}
