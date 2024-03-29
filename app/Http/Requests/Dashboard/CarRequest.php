<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class CarRequest extends FormRequest
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
            'type'=>'required',
            "plate_number"=>"required",
            "chassis_number"=>"required",
            "color"=>"required",
            "made"=>"required",
            "category"=>"required",
        ];
    }
    public function attributes()
    {
        return [
            'type'=>'نوع',
            "plate_number"=>"رقم اللوحة",
            "chassis_number"=>"رقم الهيكل",
            "color"=>"الون",
            "made"=>"سنه التصنيع",
            "category"=>"القسم",
        ];
            
    }
}
