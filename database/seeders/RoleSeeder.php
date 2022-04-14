<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        Role::truncate();
        Schema::enableForeignKeyConstraints();
        $permissions = [
            [
                "name"=> "branches",
                "read"=> true,
                "write"=> true,
                "delete"=> true,
                "update"=> true,
            ],
            [
                "name"=> "departments",
                "read"=> true,
                "write"=> true,
                "delete"=> true,
                "update"=> true,
            ],
            [
                "name"=> "members",
                "read"=> true,
                "write"=> true,
                "delete"=> true,
                "update"=> true,
            ],
            [
                "name"=> "organizations",
                "read"=> true,
                "write"=> true,
                "delete"=> true,
                "update"=> true,
            ],
            [
                "name"=> "roles",
                "read"=> true,
                "write"=> true,
                "delete"=> true,
                "update"=> true,
            ],
            [
                "name"=> "services",
                "read"=> true,
                "write"=> true,
                "delete"=> true,
                "update"=> true,
            ],
            [
                "name"=> "users",
                "read"=> true,
                "write"=> true,
                "delete"=> true,
                "update"=> true,
            ]
        ];
        Role::create([
            'roleName'=>'admin',
            'permissions'=>json_encode($permissions)
        ]);
    }
}
