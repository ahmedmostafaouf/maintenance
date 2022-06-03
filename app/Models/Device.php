<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Device extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name', 'device_num', 'serial_num', 'category', 'model', 'manufacturer_comp', 'agent', 'desc', 'status', 'department_id'
    ];

    public function department()
    {
        return $this->belongsTo(Department::class, 'department_id');
    }

    public function scopeDeviceData($query, $req)
    {
        return $query->when((isset($req['searchTerm']) && $req['searchTerm'] !== "null"), function ($query) use ($req) {
            $query->where('name', 'LIKE', '%' . $req['searchTerm'] . '%');
        })->when((isset($req['status_filter']) && $req['status_filter'] !== "null"), function ($query) use ($req) {
            $query->where('status', $req['status_filter']);

        })->when((isset($req['department_filter']) && $req['department_filter'] !== "null"), function ($query) use ($req) {
            $query->where('department_id', $req['department_filter']);
        })
            ->orderBy($req->field, $req->type)
            ->paginate($req->per_page);
    }

    public function createdat(): Attribute
    {
        return new Attribute(
            get: fn($value) => carbon::parse($value)->format('y-m-d'),
        );
    }


    /**
     * Get all the order Devices.
     */
    public function relatable()
    {
        return $this->morphMany(MaintenanceOrder::class, 'relatable_type');

    }

}
