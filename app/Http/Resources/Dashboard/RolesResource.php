<?php

namespace App\Http\Resources\Dashboard;

use Illuminate\Http\Resources\Json\JsonResource;

class RolesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $all_permissions = '';
        // if($this->permissions){
        //     foreach (json_decode($this->permissions) as $key => $value) {
        //         $read = ($value->read) ? 'Yes' : 'No';
        //         $write = ($value->read) ? 'Yes' : 'No';
        //         $edit = ($value->update) ? 'Yes' : 'No';
        //         $delete = ($value->delete) ? 'Yes' : 'No';
        //         $all_permissions.=  $value->name .' => [ '. 'Read -> '. $read .' , Write -> '.$write.' , Edit -> '.$edit.' , Delete -> '.$delete.' ] '. "\r\n";
        //     }
        // }
        return [
            'id' => $this->id,
            'name' => $this->roleName,
            'permissions' => json_decode($this->permissions)
        ];
    }
}
