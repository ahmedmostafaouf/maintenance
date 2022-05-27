<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $guarded=[];
    public function subcategory()
    {
        return $this->hasMany(\App\Models\Category::class, 'parent');
    }

    public function getParent()
    {
        return $this->belongsTo(\App\Models\Category::class, 'parent');
    }
    public function scopeCategoryData($query,$req){
        return $query->when((isset($req['searchTerm']) && $req['searchTerm'] !=="null"),function($query) use ($req){
            $query->where( 'name', 'LIKE', '%' . $req['searchTerm'] . '%' );
        })->when((isset($req['status_filter'])&&$req['status_filter']!=="null"),function ($query) use($req){
            $query->where( 'status',$req['status_filter']);
        })
            ->orderBy($req->field,$req->type)
            ->paginate( $req->per_page );
    }
}
