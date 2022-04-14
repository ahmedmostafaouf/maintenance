<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Traits\ResponseTrait;
use App\Models\Department;
use Illuminate\Http\Request;

class SpinnersControler extends Controller
{

    use ResponseTrait;

    public function departments(){
        $departments = Department::select('id','name')->where('status',1)->get();
        return $this->returnData('departments',$departments);
    }
}
