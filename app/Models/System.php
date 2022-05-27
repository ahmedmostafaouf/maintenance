<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class System extends Model
{
    use HasFactory;
    protected $guarded=[];
    public function category(){
        return $this->belongsTo(\App\Models\Category::class, 'category_id');

    }
    public function scopeSystemData($query,$req){
        return $query->when((isset($req['searchTerm']) && $req['searchTerm'] !=="null"),function($query) use ($req){
            $query->where( 'name', 'LIKE', '%' . $req['searchTerm'] . '%' );
        })->when((isset($req['status_filter'])&&$req['status_filter']!=="null"),function ($query) use($req){
            $query->where( 'status',$req['status_filter']);
        })
            ->orderBy($req->field,$req->type)
            ->paginate( $req->per_page );
    }
    public function categories(){
        return $this->belongsToMany(Category::class,'category_sytems','system_id','category_id','id','id');
    }
}
