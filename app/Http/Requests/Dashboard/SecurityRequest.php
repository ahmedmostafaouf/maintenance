<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

use Illuminate\Validation\ValidationException;



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
            "department_id" => 'required',
            "company_name" => "required|string|max:255",
            "work_reason" => "required|string",
            "responsible" => "required|string|max:255",
            "working_duration" => "required|string|max:255",
            "start_date" => "required|date",
            "end_date" => "required|date|after:start_date",
            "visitor_name"=>"array|required",
            "visitor_name.*.visitor_names" => "required|string|max:255",
            "visitor_name.*.national_id" => "required|numeric",
            "visitor_name.*.residence" => "required|string|max:255",
            "visitor_name.*.nationality" => "required|string|max:255",
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
    public function attributes()
    {
        return [
            'visitor_name.*.visitor_names'  => ' الزائر',
             'visitor_name.*.national_id'    => 'رقم الهوية',
             'visitor_name.*.residence'    => 'الاقامة',
             'visitor_name.*.nationality'    => 'الجنسية',
            'department_id'      => 'القسم',
            'company_name'      => 'اسم الشركة',
            'responsible'  => 'الشحص المسؤول',
            'working_duration' => 'مدة العمل',
            'work_reason' => 'الغرض من العمل',
            'start_date' => 'تاريخ بداية العمل',
            'end_date' => 'تاريخ نهاية العمل',
            'involve_chemicals' => 'يشمل العمل مواد كيميائية',
            'work_noisy' => 'يشكل العمل ضوضاء',
            'include_elevations' => 'هل يشمل العمل ارتفاعات',
            'confined_spaces' => 'هل يشمل العمل أماكن ضيقة',
            'services_separation' => 'هل يشمل فصل خدمات الكهرباء – الماء',
            'flammable_materials' => 'هل يشمل مواد سريعة الاشتعال ',
            'guard_name' => 'اسم الحارس',
            'entry_time' => 'قت الدخول',
            'business_responsible' => 'اسم المسئول عن ااعمال بالشركه',
        ];
            
    }

 

}
