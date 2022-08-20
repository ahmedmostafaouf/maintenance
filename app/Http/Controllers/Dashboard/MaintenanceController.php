<?php

namespace App\Http\Controllers\Dashboard;

use App\Exports\UsersExport;
use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\MaintenanceRequest;
use App\Http\Resources\Dashboard\MaintenanceResource;
use App\Http\Traits\ResponseTrait;
use App\Models\Maintenance;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class MaintenanceController extends Controller
{
    use ResponseTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'read maintenance')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $maintenance = Maintenance::MaintenanceData($request);
        return MaintenanceResource::collection($maintenance);
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
    public function store(MaintenanceRequest $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'write maintenance')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
           $data=['name'=>$request->name,'status'=>$request->status,'desc'=>$request->desc,'type'=>$request->type];
          $maintenance= Maintenance::create($data);
        $maintenance->services()->sync($request->service_id);
        $this->returnSuccessMessage('تم انشاء الصيانة بنجاح');
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
        $maintenance=Maintenance::with('services')->findOrFail($id);
        return $this->returnData('maintenance',$maintenance);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(MaintenanceRequest $request, $id)
    {
        $maintenance=Maintenance::findOrFail($id);
        $maintenance->update($request->all());
        $maintenance->services()->syncWithoutDetaching($request->service_id);
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
        if (auth('sanctum')->user()->cannot('admin', 'delete maintenance')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $maintenance=Maintenance::findOrFail($id);

        $maintenance->delete();
        return $this->returnSuccessMessage('Maintenance Deleted Succeffully');

    }
    public function bulk_delete($ids){
        Maintenance::whereIn('id',explode(',',$ids))->delete();
        return $this->returnSuccessMessage('تم الحذف بنجاح');
    }
    public function export(){
        return Excel::download(new UsersExport(), 'Maintenance.xlsx');
    }

}
