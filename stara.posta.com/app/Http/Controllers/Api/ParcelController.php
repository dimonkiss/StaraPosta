<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ParcelController extends Controller
{
    public function getList() {
        $data = Categories::all();
        return response()->json($data)
            ->header("Content-Type", "application/json; charset=utf8");
    }
}
