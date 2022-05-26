<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\TechnicalRequest;
use App\Http\Resources\Dashboard\TechnicalResource;
use App\Http\Traits\ResponseTrait;
use App\Models\Technical;
use Illuminate\Http\Request;

class TechnicalController extends Controller
{
    use ResponseTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'read technical')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $technical = Technical::TechnicalData($request);
        return TechnicalResource::collection($technical);
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
    public function store(TechnicalRequest $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'write technical')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }

        Technical::create($request->all());
        $this->returnSuccessMessage('تم انشاء  بنجاح');
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
        $Technical=Technical::findOrFail($id);
        return $this->returnData('technical',$Technical);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Technical $request, $id)
    {
        $technical=Technical::findOrFail($id);
        $technical->update($request->all());
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
        if (auth('sanctum')->user()->cannot('admin', 'delete technical')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $technical=Technical::findOrFail($id);

        $technical->delete();
        return $this->returnSuccessMessage('Deleted Succeffully');

    }
    public function bulk_delete($ids){
        Technical::whereIn('id',explode(',',$ids))->delete();
        return $this->returnSuccessMessage('تم الحذف بنجاح');
    }
    public function export(){
        return Excel::download(new UsersExport(), 'Maintenance.xlsx');
    }
}
