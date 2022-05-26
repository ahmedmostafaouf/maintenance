<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Technical extends Model
{
    use HasFactory;
    protected $guarded=[];
    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
    public function scopeTechnicalData($query,$req){
        return $query->when((isset($req['searchTerm']) && $req['searchTerm'] !=="null"),function($query) use ($req){
            $query->where( 'name', 'LIKE', '%' . $req['searchTerm'] . '%' );
        })
            ->orderBy($req->field,$req->type)
            ->paginate($req->per_page );
    }
}
