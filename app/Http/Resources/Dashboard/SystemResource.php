<?php

namespace App\Http\Resources\Dashboard;

use Illuminate\Http\Resources\Json\JsonResource;

class SystemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
//     dd($this->categories);
        $branchs=[];

           foreach ($this->categories as $branch){
              array_push($branchs,$branch->name);
           }

        $parent=[];
        if(!$this->category->getParent){
            $parent=['القسم الرئيسي'=>$this->category->name];
        }elseif($this->category->getParent->getParent){
            $parent=['القسم الرئيسي'=>$this->category->getParent->getParent->name??'--','القسم الفرعي'=>$this->category->getParent->name??'--','ثسم الفرعي من الفرعي'=>$this->category->name??'--','الفروع'=>$branchs];
        }else{
        // $parent=[];
            $parent=['القسم الرئيسي'=>$this->category->getParent->name??'--','القسم الفرعي'=>$this->category->name??'--'];

        }

        return [
            'id' => $this->id,
            'name'=>@$this->name,
            'main_cat'=>$parent,
            'created_at'=>$this->created_at,
        ];
    }
}
