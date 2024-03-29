<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Maintenance extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'name','status','desc','type'
    ];

    const MAINTENANCE_HAS_DEVICES_TYPE = '1';
    const MAINTENANCE_HAS_CARS_TYPE = '2';
    const MAINTENANCE_HAS_NOTHING_TYPE = '3';


/*    public function service(){
        return $this->belongsTo(Service::class,'service_id');
    }*/
    public function scopeMaintenanceData($query,$req){
        return $query->when((isset($req['searchTerm']) && $req['searchTerm'] !=="null"),function($query) use ($req){
            $query->where( 'name', 'LIKE', '%' . $req['searchTerm'] . '%' );
        })->when((isset($req['status_filter'])&&$req['status_filter']!=="null"),function ($query) use($req){
            $query->where( 'status',$req['status_filter']);

        })->when((isset($req['service_filter'])&&$req['service_filter']!=="null"),function ($query) use($req){
            $query->where('service_id',$req['service_filter']);
        })
            ->orderBy($req->field,$req->type)
            ->paginate($req->per_page );
    }
    public function createdat(): Attribute{
        return new Attribute(
            get: fn ($value) => carbon::parse($value)->format('y-m-d'),
        );
    }
    public function services(){
        return $this->belongsToMany(Service::class,'maintenance_services','maintenance_id','service_id','id','id');
    }
}
