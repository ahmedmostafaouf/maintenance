<?php

namespace App\Http\Resources\API;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $userData = [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'image' => $this->image,
            'role' => 'admin',
            'ability' => [["action"=> "manage", "subject"=> "all"]],
        ];
        return [
            'accessToken' => $this->createToken('token-name', ['server:update'])->plainTextToken,
            'refreshToken' => $this->createToken('token-name', ['server:update'])->plainTextToken,
            'userData' => $userData
        ];
    }
}
