<?php

namespace App\Http\Resources\Dashboard;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class StockResource extends JsonResource
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
            'id' => (int)$this->id,
            'name'=> (string)$this->name,
            'status_stock'=> $this->status==1?'قطع غيار':($this->status==2?'مستهلكات ' :'مواد نظافة'),
            'type'=> $this->type==1?'عدد':'طقم',
            'number'=> $this->number,
            'code'=> (int)$this->code,
            'supply_date'=> Carbon::parse($this->supply_date)->format('Y-m-d'),
            'amount'=> (int)@$this->amount,
            'warehouse_name'=> (string)$this->warehouse_name,
            'note'=> (string)$this->note,
            
        ];
    }
}
