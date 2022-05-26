<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Organization;
use App\Models\Branch;
use App\Models\Service;
use Illuminate\Database\Eloquent\SoftDeletes;

class Department extends Model
{
    use HasFactory;
    protected $fillable = [
        'name','desc','status','user_id'
    ];

    public function devices()
    {
        return $this->hasMany(Device::class, 'department_id');
    }
    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
    public function scopeDepartmentData($query,$req){
        return $query->when((isset($req['searchTerm']) && $req['searchTerm'] !=="null"),function($query) use ($req){
            $query->where( 'name', 'LIKE', '%' . $req['searchTerm'] . '%' );
        })->when((isset($req['status_filter'])&&$req['status_filter']!=="null"),function ($query) use($req){
            $query->where( 'status',$req['status_filter']);

        })
        ->orderBy($req->field,$req->type)
        ->paginate( $req->per_page );
    }
    public function createdat(): Attribute{
        return new Attribute(
            get: fn ($value) => carbon::parse($value)->format('y-m-d'),
        );
    }


}
