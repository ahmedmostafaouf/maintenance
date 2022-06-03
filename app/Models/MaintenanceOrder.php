<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MaintenanceOrder extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'maintenance_id',
        'service_id',
        'department_id',
        'location',
        'desc',
        'image',
        'type',
        'device_id',
        'car_id',
    ];

    const WAITING_STATUS = '0';
    const IN_PROGRESS_STATUS = '1';
    const IN_DONE_STATUS = '2';
    const HANGING_STATUS = '3';
    const SUPLLY_DONE_STATUS = '5';
    const SUPLLY_ALREADY_DONE_STATUS = '6';

    /**scopeFilter
     * @param $query
     * @param $req
     * @return mixed
     */
    public function scopeFilter($query, $req)
    {
        return $query->when((isset($req['searchTerm']) && $req['searchTerm'] !== "null"), function ($query) use ($req) {
            $query->whereHas('maintenance', fn($q) => $q->where('name', 'LIKE', '%' . $req['searchTerm'] . '%'));
        })
            ->orderBy('id', $req->type)
            ->paginate($req->per_page);
    }

    /**
     * Get the parent relatable model (post or video).
     */
    public function relatable()
    {
        return $this->morphTo();
    }

    public function maintenance()
    {
        return $this->belongsTo(Maintenance::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);

    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function device()
    {
        return $this->belongsTo(Device::class);
    }

    public function car()
    {
        return $this->belongsTo(Car::class);
    }

    public function currentStatus()
    {
        return match ($this->status) {
            self::WAITING_STATUS => 'قيد الانتظار',
            self::IN_PROGRESS_STATUS => 'جاري التنفيذ',
            self::IN_DONE_STATUS => 'تم التنفيذ',
            self::HANGING_STATUS => 'معلق',
            self::SUPLLY_DONE_STATUS => 'بانتظار التوريد',
            self::SUPLLY_ALREADY_DONE_STATUS => 'تم التوريد',
        };
    }
}
