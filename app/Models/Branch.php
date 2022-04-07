<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Department;
use App\Models\Organization;

class Branch extends Model
{
    use HasFactory;

    protected $fillable = [
        'name','phone','address','organization_id'
    ];

    public function organization(){
        return $this->belongsTo(Organization::class,'organization_id');
    }

    public function departments(){
        return $this->hasMany(Department::class,'branch_id');
    }

    public function getCreatedAtAttribute($val){
        return Carbon::parse($val)->format('Y-m-d');
    }

    public function scopeBranchesData($query,$req){
        return $query->when((isset($req['searchTerm']) && $req['searchTerm'] != null),function($query) use ($req){
            $query->where( 'name', 'LIKE', '%' . $req['searchTerm'] . '%' );
        })
            ->orderBy($req->field,$req->type)
            ->paginate( $req->per_page );
    }
}
