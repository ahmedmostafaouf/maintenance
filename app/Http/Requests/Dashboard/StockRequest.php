<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class StockRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'=>'required',
            'code'=>'required|unique:stocks,code',
            'amount'=>'required|numeric',
            'status'=>'required',
            'number'=>'required',
            'type'=>'required',
            'supply_date'=>'required|date',
            'warehouse_name'=>'required',
            'note'=>'sometimes|nullable',
        ];
    }
}
