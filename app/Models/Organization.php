<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Branch;
use App\Models\Department;

class Organization extends Model
{
    use HasFactory;

    protected $fillable = [
        'name','desc','lat','long','email','address','token','instance_id','temp_msg',
        'phone','logo','qr_code','website_url'
    ];

    public function branches(){
        return $this->hasMany(Branch::class,'organization_id');
    }

    public function departments(){
        return $this->hasMany(Department::class,'organization_id');
    }

}
