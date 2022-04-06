<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\organization;
use App\Models\Branch;
use App\Models\Service;

class Department extends Model
{
    use HasFactory;

    protected $fillable = [
        'name','desc','phone','status','branch_id','organization_id'
    ];

    public function branch(){
        return $this->belongsTo(Branch::class,'branch_id');
    }

    public function organization(){
        return $this->belongsTo(Organization::class,'organization_id');
    }

    public function services(){
        return $this->hasMany(Service::class,'department_id');
    }
}
