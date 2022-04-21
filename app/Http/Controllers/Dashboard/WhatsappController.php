<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class WhatsappController extends Controller
{

    public function webHook(Request $request){
        Log::debug($request->all());
        return response()->json($request->all());
    }
}
