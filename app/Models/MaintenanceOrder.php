<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MaintenanceOrder extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [];

    const WAITING_STATUS = 0;
    const IN_PROGRESS_STATUS = 1;
    const IN_DONE_STATUS = 2;
    const HANGING_STATUS = 3;
    const SUPLLY_DONE_STATUS = 5;


}
