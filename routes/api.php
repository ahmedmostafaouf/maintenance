<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', 'AuthController@login');

Route::group(['middleware'=>['auth:sanctum']],function () {
    Route::post('/logout', 'AuthController@signout');
    Route::resource('organizations', "OrganizationController");
    Route::get('/organization-statistics/{id}', 'OrganizationController@statistics');
    Route::resource('departments', "DepartmentController");
    Route::resource('branches', "BrancheController");
    Route::get('/all-organizations', "BrancheController@getAllOrganizations");
    Route::get('/all-branches/{org_id}', "BrancheController@getAllBranches");
    Route::resource('services', "ServiceController");
    Route::resource('roles', "RoleController");
    Route::group(['prefix'=>'spinner'],function(){
        Route::get('departments', "SpinnersControler@departments");
        Route::get('permissions', "SpinnersControler@permissions");
    });

});
