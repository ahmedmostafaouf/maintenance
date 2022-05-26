<?php

namespace App\Exports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;



class UsersExport implements FromCollection,WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $users =  User::where('status','1')->get();
        $data = $users->transform(function ($q){
            return[
                'name'=>$q->name,
                'email'=>$q->email,
                'phone'=>$q->phone,
                'role_id'=>$q->group->roleName,
                'status'=>$q->status?'مفعل':'غير مفعل',
                'created_at'=>$q->created_at
            ];
        });
        return $data;
    }


    public function headings(): array
    {
        return ['name', 'email','phone' ,'role', 'status', 'created_at'/*,'country'*/];
    }

    }

