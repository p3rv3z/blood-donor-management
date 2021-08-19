<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BloodGroupController;
use App\Http\Controllers\Api\DonerController;
use App\Http\Controllers\Api\LocationController;
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

Route::group(['middleware' => 'auth:sanctum'], function () {

  Route::get('/users/auth', AuthController::class);

  Route::apiResource('doners', DonerController::class);

  Route::apiResource('locations', LocationController::class);

  Route::apiResource('blood-groups', BloodGroupController::class)->only(['index', 'show']);
});


Route::get('test', function () {
  return [
    "message" => "test"
  ];
});
