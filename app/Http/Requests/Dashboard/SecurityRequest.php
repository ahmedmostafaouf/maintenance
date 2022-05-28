<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class SecurityRequest extends FormRequest
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
            "department_id" => 'required|exists:departments,id',
            "company_name" => "required|string|max:255",
            "work_reason" => "required|string",
            "responsible" => "required|string|max:255",
            "working_duration" => "required|string|max:255",
            "start_date" => "required|date",
            "end_date" => "required|date|after:start_date",
            "visitor_name" => "required|string|max:255",
            "national_id" => "required|numeric",
            "residence" => "required|string|max:255",
            "nationality" => "required|string|max:255",
            "involve_chemicals" => "required|numeric|in:0,1",
            "work_noisy" => "required|numeric|in:0,1",
            "include_elevations" => "required|numeric|in:0,1",
            "confined_spaces" => "required|numeric|in:0,1",
            "services_separation" => "required|numeric|in:0,1",
            "flammable_materials" => "required|numeric|in:0,1",
            "guard_name" => "required|string|max:255",
            "entry_time" => "required",
            "business_responsible" => "required|string|max:255",
        ];
    }
}
