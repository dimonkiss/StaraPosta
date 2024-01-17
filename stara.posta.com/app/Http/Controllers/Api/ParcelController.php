<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use App\Models\Parcels;
use Illuminate\Http\Request;

class ParcelController extends Controller
{
    /**
     * @OA\Get(
     *     tags={"Parcel"},
     *     path="/api/parcels",
     *     @OA\Response(response="200", description="List Parcels.")
     * )
     */
    public function getList() {
        $data = Parcels::all();
        return response()->json($data)
            ->header("Content-Type", "application/json; charset=utf8");
    }

    /**
     * @OA\Post(
     *     tags={"Parcel"},
     *     path="/api/parcels",
     *     @OA\RequestBody(
     *         @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                 required={"number","category_id","sender_id","receiver_id"},
     *
     *                 @OA\Property(
     *                     property="number",
     *                     type="string"
     *                 ),
     *                  @OA\Property(
     *                      property="category_id",
     *                      type="number"
     *                  ),
     *                 @OA\Property(
     *                      property="description",
     *                      type="string"
     *                  ),
     *                  @OA\Property(
     *                      property="sender_id",
     *                      type="number"
     *                  ),
     *                  @OA\Property(
     *                      property="receiver_id",
     *                      type="string"
     *                  )
     *             )
     *         )
     *     ),
     *     @OA\Response(response="200", description="Add Category.")
     * )
     */
    public function create(Request $request) {
        $input = $request->all();
        $parcel = Parcels::create($input);
        return response()->json($parcel,201,
            ['Content-Type' => 'application/json;charset=UTF-8', 'Charset' => 'utf-8'], JSON_UNESCAPED_UNICODE);
    }

}
