<?php

namespace App\Http\Controllers\Dashboard;

use App\Exports\UsersExport;
use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\ServiceRequest;
use App\Http\Resources\Dashboard\ServiceResource;
use App\Http\Traits\ResponseTrait;
use App\Models\Maintenance;
use App\Models\Service;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ServiceController extends Controller
{
    use ResponseTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'read service')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $service = Service::ServiceData($request);
        return ServiceResource::collection($service);
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
    public function store(ServiceRequest $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'write service')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }

        Service::create($request->all());
        $this->returnSuccessMessage('تم انشاء الخدمة بنجاح');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $service=Service::findOrFail($id);
        return $this->returnData('service',$service);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ServiceRequest $request, $id)
    {
        $service=Service::findOrFail($id);
        $service->update($request->all());
        return $this->returnSuccessMessage('تم التعديل بنجاح');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (auth('sanctum')->user()->cannot('admin', 'delete service')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $service=Service::findOrFail($id);

        $service->delete();
        return $this->returnSuccessMessage('Maintenance Deleted Succeffully');
    }
    public function bulk_delete($ids){
        Service::whereIn('id',explode(',',$ids))->delete();
        return $this->returnSuccessMessage('تم الحذف بنجاح');
    }
    public function export(){
        return Excel::download(new UsersExport(), 'Maintenance.xlsx');
    }
}
