<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Department;
use App\Models\Member;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'name','status','desc','queue_number','range_time','department_id'
    ];

    public function department(){
        return $this->belongsTo(Department::class,'department_id');
    }


    public function members(){
        return $this->belongsToMany(Member::class, 'member_services');
    }
}
