<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class MaintenanceRequest extends FormRequest
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
            'name'=>'required|unique:maintenances,name,'.$this->id,
            "desc"=>"sometimes|nullable|min:10",
            "status"=>"required",
            "service_id"=>"required",
            "type"=>"required",
        ];
    }
}
