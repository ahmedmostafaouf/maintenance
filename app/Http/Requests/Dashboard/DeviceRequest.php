<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class DeviceRequest extends FormRequest
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
            'name' => 'required|unique:devices,name,'.$this->id,
            'status' => 'required',
            'desc' => 'sometimes|nullable|min:8',
            'device_num' => 'required|unique:devices,device_num,'.$this->id,
            'serial_num' => 'required|unique:devices,serial_num,'.$this->id,
            'category' => 'required',
            'model' => 'required',
            'manufacturer_comp' => 'required',
            'agent' => 'required',
        ];
    }
}
