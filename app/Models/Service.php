<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Department;
use App\Models\Member;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'name','status','desc','queue_number','range_time','department_id'
    ];

    public function department(){
        return $this->belongsTo(Department::class,'department_id');
    }


    public function members(){
        return $this->belongsToMany(Member::class, 'member_services');
    }

    public function scopeGetData($query,$req){
        return $query->when((isset($req['searchTerm']) && $req['searchTerm'] != null),function($query) use ($req){
            $query->where( 'name', 'LIKE', '%' . $req['searchTerm'] . '%' );
        });
    }

    /**
     * Interact with the user's Created at.
     *
     * @return Attribute
    */
    public function createdAt(): Attribute{
        return new Attribute(
            get: fn ($value) => Carbon::parse($value)->format('Y-m-d'),
        );
    }
}
