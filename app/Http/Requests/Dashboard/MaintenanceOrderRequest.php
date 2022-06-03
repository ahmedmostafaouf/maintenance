<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class MaintenanceOrderRequest extends FormRequest
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
            'maintenance_id' => 'required|integer|exists:maintenances,id',
            'type' => 'required|integer|in:1,2,3',
            'service_id' => 'required|integer|exists:services,id',
            'department_id' => 'required|integer|exists:departments,id',
            'related_data' => 'required|integer',
            'location' => 'nullable|url',
            'desc' => 'required|string',
            'image' => 'nullable',
            'image.*' => 'mimes:jpeg,jpg,png,gif|required|max:10000',
        ];
    }

    public function messages(){
        return[
            'maintenance_id.required'=>' برجاء اختيار نوع الصيانه .',
            'service_id.required'=>' برجاء اختيار الخدمه.',
            'department_id.required'=>' برجاء اختيار القسم.',
            'location.url'=>' برجاء اختيار اللوكيشن.',

        ];
    }
}
