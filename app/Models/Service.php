<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Department;
use App\Models\Member;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\SoftDeletes;

class service extends model
{
    use hasfactory,softdeletes;

    protected $fillable = [
        'name','status','desc','queue_number','range_time','department_id'
    ];

    public function department(){
        return $this->belongsto(department::class,'department_id');
    }


    public function members(){
        return $this->belongstomany(member::class, 'member_services');
    }

    public function scopegetdata($query,$req){
        return $query->when((isset($req['searchterm']) && $req['searchterm'] != null),function($query) use ($req){
            $query->where( 'name', 'like', '%' . $req['searchterm'] . '%' );
        });
    }

    /**
     * interact with the user's created at.
     *
     * @return attribute
    */
    public function createdat(): attribute{
        return new attribute(
            get: fn ($value) => carbon::parse($value)->format('y-m-d'),
        );
    }

    public function users(){
        return $this->morphmany(user::class, 'assignable');
    }
}
