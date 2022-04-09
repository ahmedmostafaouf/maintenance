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
    Route::resource('departments', "DepartmentController");
    Route::resource('branches', "BrancheController");
    Route::get('/all-organizations', "BrancheController@getAllOrganizations");
    Route::get('/all-branches', "BrancheController@getAllBranches");
    Route::resource('services', "ServiceController");

    Route::group(['prefix'=>'spinner'],function(){
        Route::get('departments', "SpinnersControler@departments");
    });
});
