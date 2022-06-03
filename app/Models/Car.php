<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function scopeCarData($query,$req){
          if($req->field=='name'){
              $req['field']='type';
          }
        return $query->when((isset($req['searchTerm']) && $req['searchTerm'] !=="null"),function($query) use ($req){
            $query->where( 'type', 'LIKE', '%' . $req['searchTerm'] . '%' );
        })
            ->orderBy($req->field,$req->type)
            ->paginate($req->per_page );
    }

    /**
     * Get all the order cars.
     */
    public function relatable()
    {
        return $this->morphMany(MaintenanceOrder::class, 'relatable_type');
    }
}
