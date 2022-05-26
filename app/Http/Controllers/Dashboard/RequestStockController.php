<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\StockRequest;
use App\Http\Traits\ResponseTrait;
use App\Models\RequestStock;
use App\Models\Stock;
use Illuminate\Http\Request;

class RequestStockController extends Controller
{
  use ResponseTrait;

   public function makeRequest(Request $request){

       RequestStock::create([
           'stock_id'=>$request->stock ,
           'quantity'=>$request->order,
           'request_number'=>$request->rquest_num,
           'wait'=>1,
           'note'=>$request->note
       ]);
        return $this->returnSuccessMessage('تم الحفظ بنجاح');

   }
   public function makeRequestDone(Request $request){
      $stock= Stock::findOrFail($request->stock);
      $stock->decrement('amount',(int)$request->order);
       RequestStock::create([
           'stock_id'=>$request->stock ,
           'quantity'=>$request->order,
           'request_number'=>$request->rquest_num,
           'wait'=>0,
           'note'=>$request->note
       ]);
        return $this->returnSuccessMessage('تم الحفظ بنجاح');

   }
}
