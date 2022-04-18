<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\EmloyeeRequest;
use App\Http\Resources\Dashboard\EmployeeResource;
use App\Http\Resources\Dashboard\UserResource;
use App\Http\Traits\ResponseTrait;
use App\Models\User;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    use  ResponseTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'read users')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $users = User::where('name','!=','Admin')->UserData($request);
        return EmployeeResource::collection($users);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EmloyeeRequest $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'write users')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $data = $request->except('image');
        if( isset($request->image) && $request->image->isValid())
            $data['image'] = imageUpload($request->image, 'images/employee/image');
        User::create($data);
        $this->returnSuccessMessage('Employee Created Successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $employee=User::findOrFail($id);
        $employee= new EmployeeResource($employee);
        return $this->returnData('employee',$employee,'Employee Returned Success');

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       $employee=User::findOrFail($id);
       return $this->returnData('employee',$employee,'Employee Returned Success');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EmloyeeRequest $request, $id)
    {
        $data=$request->except(['image']);
        if( isset($request->image) && $request->image->isValid())
            $data['image'] = imageUpload($request->image, 'images/employee/image');

        $employee=User::findOrFail($id);
     $employee->update($data);
        $this->returnSuccessMessage('Employee Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (auth('sanctum')->user()->cannot('admin', 'delete users')) {
            return  \responsenp()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        try{
            $employee=User::findOrFail($id);

            if($employee){
                $employee->delete();
            }
            return $this->returnSuccessMessage('Employee Deleted Succeffully');
        } catch (\Exception $e) {
            dd($e);
            return $this->returnError(500,'err');
        }
    }
}
