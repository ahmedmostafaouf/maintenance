<?php

namespace App\Http\Resources\Dashboard;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SecurityResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        if ($request->route()->getName() == "security-announcement.edit"){
            $data = [
                'id' => $this->id,
                'department_id' => $this->department_id,
                'status' => $this->status,
                'company_name' => $this->company_name,
                'work_reason' => $this->work_reason,
                'responsible' => $this->responsible,
                'working_duration' => $this->working_duration,
                'month' => $this->month,
                'start_date' => Carbon::parse($this->start_date)->format('Y-m-d'),
                'start_time' => Carbon::parse($this->start_date)->format('H:i'),
                'end_date' => Carbon::parse($this->end_date)->format('Y-m-d'),
                'end_time' => Carbon::parse($this->end_date)->format('H:i'),
                'visitor_name' => $this->visitor_name,
                // 'national_id' => $this->national_id,
                // 'residence' => $this->residence,
                // 'nationality' => $this->nationality,
                'involve_chemicals' => $this->involve_chemicals,
                'work_noisy' => $this->work_noisy,
                'include_elevations' => $this->include_elevations,
                'confined_spaces' => $this->confined_spaces,
                'services_separation' => $this->services_separation,
                'flammable_materials' => $this->flammable_materials,
                'entry_gate' => $this->entry_gate,
                'guard_name' => $this->guard_name,
                'entry_time' => $this->entry_time,
                'business_responsible' => $this->business_responsible,
            ];
        }else{
            $data = [
                'id' => $this->id,
                'department' => $this->department_id,
                'visitor_name' => $this->visitor_name,
                'company_name' => $this->company_name,
                'securityStatus' => $this->status,
                'responsible' => $this->responsible,
                'working_duration' => $this->working_duration,
            ];
        }
        return $data;
    }
}
