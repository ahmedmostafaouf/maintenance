<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestStock extends Model
{
    use HasFactory;
    protected $guarded=[];
    public function stock(){
        return $this->belongsTo(Stock::class,'stock_id');
    }
}
