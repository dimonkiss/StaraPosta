<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ParcelController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/categories',[CategoryController::class, 'getList']);
Route::post('/categories',[CategoryController::class, 'create']);
Route::delete("/categories/{id}", [CategoryController::class, "delete"]);
Route::post("/categories/edit/{id}", [CategoryController::class, "edit"]);

Route::post('/login',[AuthController::class, 'login']);
Route::post('/register',[AuthController::class, 'register']);
Route::get('/user/{id}', [AuthController::class, 'getUserById']);


Route::get('/parcels',[ParcelController::class, 'getList']);
Route::post('/parcels',[ParcelController::class, 'create']);
Route::delete('/parcels/{id}',[ParcelController::class,'delete']);
