<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\CategoryRequest;
use App\Http\Resources\Dashboard\CategoryResource;
use App\Http\Traits\ResponseTrait;
use App\Models\Category;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class CategoryController extends Controller
{
    use ResponseTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'read category')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $categories = Category::CategoryData($request);
        return CategoryResource::collection($categories);
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
    public function store(CategoryRequest $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'write category')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        try{

            if($request->main_cat==1){

                Category::create(['name'=>$request->name,'parent'=>0,'main_cat'=>$request->main_cat]);

            }elseif($request->main_cat==2 && $request->parent!=null && $request->child!=null && $request->sub_child!=null){
                Category::create(['name'=>$request->name,'parent'=>$request->sub_child,'main_cat'=>$request->main_cat]);
            }elseif($request->main_cat==2 && $request->parent!=null && $request->child==null&&$request->sub_child==null){
                Category::create(['name'=>$request->name,'parent'=>$request->parent,'main_cat'=>$request->main_cat]);
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
        if (auth('sanctum')->user()->cannot('admin', 'update category')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        try{
            $categories=Category::findOrFail($id);
            if($categories){
                return $this->returnData('category',$categories);
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
    public function update(CategoryRequest $request, Category $category)
    {
        if (auth('sanctum')->user()->cannot('admin', 'update category')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        try{
            if($category){
                $category->update($request->all());
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
    public function destroy(Category $category)
    {
        if (auth('sanctum')->user()->cannot('admin', 'delete department')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        try{
            if($category){
                $category->delete();
            }
            return $this->returnSuccessMessage('Category Deleted Succeffully');
        } catch (\Exception $e) {
            dd($e);
            return $this->returnError(500,'err');
        }
    }
    public function bulk_delete($ids){
        Category::whereIn('id',explode(',',$ids))->delete();
        return $this->returnSuccessMessage('تم الحذف بنجاح');
    }
    public function export(){
        return Excel::download(new UsersExport(), 'device.xlsx');
    }
}
