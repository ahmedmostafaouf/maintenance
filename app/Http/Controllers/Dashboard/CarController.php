<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\CarRequest;
use App\Http\Resources\Dashboard\CarResource;
use App\Http\Resources\Dashboard\TechnicalResource;
use App\Http\Traits\ResponseTrait;
use App\Models\Car;
use App\Models\Technical;
use Illuminate\Http\Request;

class CarController extends Controller
{
    use ResponseTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'read car')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $car = Car::CarData($request);
        return CarResource::collection($car);
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
    public function store(CarRequest $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'write car')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }

        Car::create($request->all());
        $this->returnSuccessMessage('تم انشاء بنجاح');
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
        $car=Car::findOrFail($id);
        return $this->returnData('car',$car);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CarRequest $request, $id)
    {
        $car=Car::findOrFail($id);
        $car->update($request->all());
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
        if (auth('sanctum')->user()->cannot('admin', 'delete car')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $car=Car::findOrFail($id);

        $car->delete();
        return $this->returnSuccessMessage('Deleted Succeffully');

    }
    public function bulk_delete($ids){
        Car::whereIn('id',explode(',',$ids))->delete();
        return $this->returnSuccessMessage('تم الحذف بنجاح');
    }
    public function export(){
        return Excel::download(new UsersExport(), 'Maintenance.xlsx');
    }
}
