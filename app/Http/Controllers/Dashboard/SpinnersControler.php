<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Traits\ResponseTrait;
use App\Models\Branch;
use App\Models\Category;
use App\Models\Department;
use App\Models\Organization;
use App\Models\Role;
use App\Models\service;
use App\Models\Stock;
use App\Models\User;
use Illuminate\Http\Request;

class SpinnersControler extends Controller
{

    use ResponseTrait;


    public function permissions(){
        return $this->returnData('permissions',permissions());
    }
    public function roles(){
        $roles=Role::select([ 'roleName as name' , 'id'])->get();
        return $this->returnData('roles',$roles);
    }
    public function all_service(){
        $service=Service::select('id','name')->whereStatus('1')->get();
        return $this->returnData('service',$service);

    }
    public function departments(){
        $departments=Department::select('id','name')->whereStatus('1')->get();
        return $this->returnData('departments',$departments);

    }
    public function getStocks($status){
        $departments=Stock::whereStatus($status)->get();
        return $this->returnData('stocks',$departments);

    }
    public function getusers(){
        $users=User::whereStatus(1)->where('role_id','!=',1)->get();
        return $this->returnData('users',$users);

    }
    public function getcategories($main_cat){

        $categories=Category::where('main_cat',1)->get();
        return $this->returnData('categories',$categories);

    }
    public function getMaincategories(){
        $categories=Category::where('parent',0)->get();
        return $this->returnData('categories',$categories);

    }
    public function getBranchcategories($cat){
        $categories=Category::where('parent',$cat)->get();
        return $this->returnData('categories',$categories);

    }
    public function getBranch2categories($cat){
        $categories=Category::where('parent',$cat)->get();
        return $this->returnData('categories',$categories);

    }

}
