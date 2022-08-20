<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;
    protected $guarded=[];
    public function scopeStockData($query,$req){
        return $query->when((isset($req['searchTerm']) && $req['searchTerm'] !=="null"),function($query) use ($req){
            $query->where( 'name', 'LIKE', '%' . $req['searchTerm'] . '%' );
        })->when((isset($req['status_filter'])&&$req['status_filter']!=="null"),function ($query) use($req){
            $query->where( 'status',$req['status_filter']);

        })
            ->orderBy($req->field,$req->type)
            ->paginate($req->per_page );
    }

    public function createdat(): attribute{
        return new attribute(
            get: fn ($value) => carbon::parse($value)->format('y-m-d'),
        );
    }
    public function requestsStock(){
        return $this->hasMany(Stock::class,'stock_id');
    }
}
