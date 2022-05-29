<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends model
{
    use hasfactory,softdeletes;

    /**
     * @var string[]
     */
    protected $fillable = [
        'name','status','desc'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function maintenances(){
        return $this->hasMany(Maintenance::class,'service_id');
    }



    /**
     * @param $query
     * @param $req
     * @return mixed
     */
    public function scopeServiceData($query,$req){
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
    public function maintenancess(){
        return $this->belongsToMany(Maintenance::class,'maintenance_services','service_id','maintenance_id','id','id');
    }

}
