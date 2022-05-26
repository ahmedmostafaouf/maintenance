<?php

namespace App\Http\Controllers\Dashboard;

use App\Exports\UsersExport;
use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\StockRequest;
use App\Http\Resources\Dashboard\StockResource;
use App\Http\Traits\ResponseTrait;
use App\Models\Stock;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;


class StockController extends Controller
{
    use ResponseTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'read stock')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $stock = Stock::StockData($request);
        return StockResource::collection($stock);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StockRequest $request)
    {
//        dd($request->all());
        if (auth('sanctum')->user()->cannot('admin', 'write stock')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }

        Stock::create($request->all());
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
        $stock=Stock::findOrFail($id);
        return $this->returnData('stock',$stock);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StockRequest $request, $id)
    {
        $stock=Stock::findOrFail($id);
        $stock->update($request->all());
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
        if (auth('sanctum')->user()->cannot('admin', 'delete stock')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $stock=Stock::findOrFail($id);

        $stock->delete();
        return $this->returnSuccessMessage('stock Deleted Succeffully');
    }
    public function bulk_delete($ids){
        Stock::whereIn('id',explode(',',$ids))->delete();
        return $this->returnSuccessMessage('تم الحذف بنجاح');
    }
    public function export(){
        return Excel::download(new UsersExport(), 'Maintenance.xlsx');
    }
}
