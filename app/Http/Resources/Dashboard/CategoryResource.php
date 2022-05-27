<?php

namespace App\Http\Resources\Dashboard;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
//        dd($this->getParent);
//        $parent=[];
//        if(!$this->getParent){
//            $parent=['القسم الرئيسي'=>$this->category->name];
//        }elseif($this->category->getParent->getParent){
//            $parent=['القسم الرئيسي'=>$this->category->getParent->getParent->name??'--','القسم الفرعي'=>$this->category->getParent->name??'--','ثسم الفرعي من الفرعي'=>$this->category->name??'--'];
//        }else{
//            // $parent=[];
//            $parent=['القسم الرئيسي'=>$this->category->getParent->name??'--','القسم الفرعي'=>$this->category->name??'--'];
//
//        }
        return [
            'id' => $this->id,
            'name'=>@$this->name,
            'type'=>$this->parent==0?' رئيسي':'فرعي',
            'parent'=>$this->getParent->name??'--',
            'created_at'=>$this->created_at,
        ];
    }
}
