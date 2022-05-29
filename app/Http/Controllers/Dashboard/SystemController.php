<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\SystemRequest;
use App\Http\Resources\Dashboard\SystemResource;
use App\Http\Traits\ResponseTrait;
use App\Models\System;
use Illuminate\Http\Request;

class SystemController extends Controller
{
    use ResponseTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'read system')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $categories = System::SystemData($request);
        return SystemResource::collection($categories);
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
    public function store(SystemRequest $request)
    {

        if (auth('sanctum')->user()->cannot('admin', 'write system')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        try{
            if($request->category==null && $request->category_id==null){
             $data=['name'=>$request->name,'category_id'=>$request->main_category];
                $system =System::create($data);
            }elseif($request->category!=null && $request->category_id==null){
               //قسم فرعي من الرئيسي
                $data=['name'=>$request->name,'category_id'=>$request->category];
                $system =System::create($data);
            }elseif($request->category!=null && $request->category_id!=null && $request->branches==null){
                $data=['name'=>$request->name,'category_id'=>$request->category_id];
                $system =System::create($data);
            }
            else{

                $data=['name'=>$request->name,'category_id'=>$request->category_id];
                $system =System::create($data);
                $system->categories()->sync($request->branches);
            }

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
       $system= System::with('categories')->findOrFail($id);
        return $this->returnData('system',$system);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function bulk_delete($ids){

        System::whereIn('id',explode(',',$ids))->delete();
        return $this->returnSuccessMessage('تم الحذف بنجاح');
    }
}
