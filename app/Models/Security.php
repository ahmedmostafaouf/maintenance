<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Security extends Model
{
    use HasFactory;

    const STATUS_PENDING = 0;
    const STATUS_CONFIRMED = 1;
    protected $fillable = [
        "department_id",
        "company_name",
        "work_reason",
        "responsible",
        "working_duration",
        "start_date",
        "start_time",
        "end_date",
        "end_time",
        "visitor_name",
        "national_id",
        "residence",
        "nationality",
        "involve_chemicals",
        "work_noisy",
        "include_elevations",
        "confined_spaces",
        "services_separation",
        "flammable_materials",
        "guard_name",
        "entry_time",
        "business_responsible",
        "status",
        "created_by",
        "month"
    ];

    public function scopeFilter($query,$req){
        return $query->when((isset($req['searchTerm']) && $req['searchTerm'] !=="null"),function($query) use ($req){
            $query->where( 'company_name', 'LIKE', '%' . $req['searchTerm'] . '%' )
                ->orWhere('responsible', 'LIKE', '%' . $req['searchTerm'] . '%'  )
                ->orWhere('visitor_name', 'LIKE', '%' . $req['searchTerm'] . '%'  );
            })
            ->orderBy('id',$req->type)
            ->paginate($req->per_page );
    }

    public function department()
    {
        return  $this->belongsTo(Department::class, 'department_id');
    }
}
