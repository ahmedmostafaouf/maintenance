<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\DeviceRequest;
use App\Http\Resources\Dashboard\DeviceResource;
use App\Http\Traits\ResponseTrait;
use App\Models\Device;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class DeviceController extends Controller
{
    use ResponseTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'read device')) {
            return  \response()->json(['status'=>false,'message'=>'ليس لديك الصلاحية'],403);
        }
        $device = Device::deviceData($request);
        return DeviceResource::collection($device);
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
    public function store(DeviceRequest $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'write device')) {
            return  \response()->json(['status'=>false,'message'=>'ليس لديك الصلاحية'],403);
        }
        try{
            Device::create($request->all());
            return $this->returnSuccessMessage('تم الانشاء بنجاح');
        } catch (ValidationException $e) {
            return $this->validationError($e,'validation err');
        }
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
        if (auth('sanctum')->user()->cannot('admin', 'update device')) {
            return  \response()->json(['status'=>false,'message'=>'ليس لديك الصلاحية'],403);
        }
        try{
            $device=Device::findOrFail($id);
            if($device){
                return $this->returnData('device',$device);
            }
        } catch (\Exception $e) {
            return $this->validationError($e,'err');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Device $device,DeviceRequest $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'update device')) {
            return  \response()->json(['status'=>false,'message'=>'ليس لديك الصلاحية'],403);
        }
        try{
            if($device){
                $device->update($request->all());
            }
        } catch (\Exception $e) {
            return $this->validationError($e,'err');
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Device $device)
    {
        if (auth('sanctum')->user()->cannot('admin', 'delete device')) {
            return  \response()->json(['status'=>false,'message'=>'ليس لديك الصلاحية'],403);
        }
        try{
            if($device){
                $device->delete();
            }
            return $this->returnSuccessMessage('تم الحذف بنجاح');
        } catch (\Exception $e) {
            dd($e);
            return $this->returnError(500,'حصل حطأ ما حاول في وقت لاحق');
        }
    }
    public function bulk_delete($ids){
       Device::whereIn('id',explode(',',$ids))->delete();
        return $this->returnSuccessMessage('تم الحذف بنجاح');
    }
    public function export(){
        return Excel::download(new UsersExport(), 'device.xlsx');
    }
}
