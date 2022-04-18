<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Traits\ResponseTrait;
use App\Models\Department;
use App\Models\Role;
use Illuminate\Http\Request;

class SpinnersControler extends Controller
{

    use ResponseTrait;

    public function departments(){
        $departments = Department::select('id','name')->where('status',1)->get();
        return $this->returnData('departments',$departments);
    }

    public function permissions(){
        return $this->returnData('permissions',permissions());
    }
    public function roles(){
        $roles=Role::select([ 'roleName as name' , 'id'])->get();
        return $this->returnData('roles',$roles);
    }
}
