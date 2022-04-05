<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Department;
use App\Models\Organization;

class Branch extends Model
{
    use HasFactory;

    protected $fillable = [
        'name','phone','address','organization_id'
    ];

    public function organization(){
        return $this->belongsTo(Organization::class,'organization_id');
    }

    public function departments(){
        return $this->hasMany(Department::class,'branch_id');
    }
}
