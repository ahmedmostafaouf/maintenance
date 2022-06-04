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
Route::post('/rest_password', 'AuthController@restPassword');
Route::post('/check-token', 'AuthController@checkToken');
Route::post('/new-password', 'AuthController@changePassword');

Route::group(['middleware'=>['auth:sanctum']],function () {
    Route::post('/logout', 'AuthController@signout');
    Route::resource('department', "DepartmentController");
    Route::delete('department/bulk_delete/{ids}', "DepartmentController@bulk_delete");
    Route::get('department/export', "DepartmentController@export");

    Route::resource('device', "DeviceController");
    Route::delete('device/bulk_delete/{ids}', "DeviceController@bulk_delete");
    Route::get('device/export', "DeviceController@export");
    Route::resource('employees', "EmployeeController");
    Route::delete('employee/bulk_delete/{ids}', "EmployeeController@bulk_delete");
    Route::get('employee/export', "EmployeeController@export");

    Route::resource('service', "ServiceController");
    Route::delete('service/bulk_delete/{ids}', "ServiceController@bulk_delete");
    Route::get('service/export', "ServiceController@export");
    //stock
    Route::resource('stock', "StockController");
    Route::delete('stock/bulk_delete/{ids}', "StockController@bulk_delete");
    Route::get('stock/export', "StockController@export");
    Route::post('make-request',"RequestStockController@makeRequest");
    Route::post('make-requestDone',"RequestStockController@makeRequestDone");
    //car
    Route::resource('car', "CarController");
    Route::delete('car/bulk_delete/{ids}', "CarController@bulk_delete");
    Route::get('car/export', "CarController@export");
    //technical
    Route::resource('technical', "TechnicalController");
    Route::delete('technical/bulk_delete/{ids}', "TechnicalController@bulk_delete");
    Route::get('technical/export', "TechnicalController@export");
    Route::resource('maintenance', "MaintenanceController");
    Route::delete('maintenance/bulk_delete/{ids}', "MaintenanceController@bulk_delete");
    Route::get('maintenance/export', "MaintenanceController@export");
    Route::resource('category', "CategoryController");
    Route::delete('category/bulk_delete/{ids}', "CategoryController@bulk_delete");
    Route::get('category/export', "CategoryController@export");
    Route::resource('system', "SystemController");
    Route::delete('system/bulk_delete/{ids}', "SystemController@bulk_delete");
    Route::get('system/export', "SystemController@export");
    Route::resource('roles', "RoleController");
    Route::group(['prefix'=>'spinner'],function(){
        Route::get('all-departments', "SpinnersControler@departments");
        Route::get('permissions', "SpinnersControler@permissions");
        Route::get('roles', "SpinnersControler@roles");
        Route::get('all-service', "SpinnersControler@all_service");
        Route::get('get-stocks/{status}',"SpinnersControler@getStocks");
        Route::get('get-users/',"SpinnersControler@getusers");
        Route::get('get-categories/{main_cat}',"SpinnersControler@getcategories");
        Route::get('get-main-categories',"SpinnersControler@getMaincategories");
        Route::get('get-branch-cat/{cat}',"SpinnersControler@getBranchcategories");
        Route::get('get-branch2-cat/{cat}',"SpinnersControler@getBranch2categories");
        Route::get('get-maintenance-types',"SpinnersControler@getMaintenanceTypes");
        Route::get('get-services-maintenance-type/{maintenance_id}',"SpinnersControler@getServicesInMaintenanceType");
        Route::get('get-maintenance-order-statuses',"SpinnersControler@getMaintenanceOrderStatus");
        Route::get('get-statistics-data',"SpinnersControler@getStatisticsData");
        Route::get('get-new-maintenance-orders',"SpinnersControler@getNewMaintenanceOrders");
        Route::get('get-new-maintenance-types',"SpinnersControler@getNewMaintenanceTypes");
    });

    //security declarations
    Route::resource('security-announcement', 'SecurityController');
    Route::post('security/bulk-delete/{ids}', 'SecurityController@bulkDelete');

    //maintenance orders
    Route::resource('maintenance-orders', 'MaintenanceOrderController');
    Route::delete('maintenance-orders/bulk-delete/{ids}', 'MaintenanceOrderController@bulkDelete');
    Route::post('maintenance-orders/bulk-change-status', 'MaintenanceOrderController@bulkChangeStatus');
});
