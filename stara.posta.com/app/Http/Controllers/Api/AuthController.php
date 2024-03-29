<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    /**
     * @OA\Post(
     *   path="/api/login",
     *   tags={"Auth"},
     *   summary="Login",
     *   operationId="login",
     *   @OA\RequestBody(
     *     required=true,
     *     description="User login data",
     *     @OA\MediaType(
     *       mediaType="application/json",
     *       @OA\Schema(
     *         required={"email", "password"},
     *         @OA\Property(property="email", type="string"),
     *         @OA\Property(property="password", type="string"),
     *       )
     *     )
     *   ),
     *   @OA\Response(
     *     response=200,
     *     description="Success",
     *     @OA\MediaType(
     *       mediaType="application/json"
     *     )
     *   ),
     *   @OA\Response(
     *     response=401,
     *     description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Bad Request"
     *   ),
     *   @OA\Response(
     *     response=404,
     *     description="Not Found"
     *   ),
     *   @OA\Response(
     *     response=403,
     *     description="Forbidden"
     *   )
     * )
     */
    public function login(Request $request) {
        $validation = Validator::make($request->all(),[
            'email'=> 'required|email',
            'password'=> 'required|string|min:6'
        ], [
            'email.required' => 'Пошта є побов\'язковим.',
            'email.email' => 'Пошта є невалідною.',
            'password.required' => 'Пароль не може буть пустим.',
            'password.min' => 'Довжина пароля має бути мінімум 6 символів.',
        ]);
        if($validation->fails()) {
            return response()->json($validation->errors(), Response::HTTP_BAD_REQUEST);
        }
        if(!$token = auth()->attempt($validation->validated())) {
            return response()->json(['error'=>'Дані вказано не вірно'], Response::HTTP_UNAUTHORIZED);
        }
        $email = $request->email;
        $user = User::where('email', $email)->first();
        $userId = $user->id;

        return response()->json(['token'=>$token,'senderUser'=>$userId], Response::HTTP_OK);
    }

    /**
     * @OA\Post(
     *     tags={"Auth"},
     *     path="/api/register",
     *     @OA\RequestBody(
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 required={"email", "lastName", "name", "phone", "password", "password_confirmation"},
     *                 @OA\Property(
     *                     property="email",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="lastName",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="name",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="phone",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="password",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="password_confirmation",
     *                     type="string"
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(response="200", description="Add User.")
     * )
     */
    public function register(Request $request) {

        $validation = Validator::make($request->all(),[
            'name'=> 'required|string',
            'lastName'=> 'required|string',
            'phone'=> 'required|string',
            'email'=> 'required|email',
            'password'=> 'required|string|min:6',
        ]);

        if($validation->fails()) {
            return response()->json($validation->errors(), Response::HTTP_BAD_REQUEST);
        }

        $input = $request->all();
        //$imageName = uniqid().".webp";
        //$sizes = [50,150,300,600,1200];
        // create image manager with desired driver
        $manager = new ImageManager(new Driver());
       // foreach ($sizes as $size) {
       //     $fileSave = $size."_".$imageName;
       //     $imageRead = $manager->read($input["image"]);
       //     $imageRead->scale(width: $size);
       //     $path=public_path('upload/'.$fileSave);
       //     $imageRead->toWebp()->save($path);st
        //}
        $user = User::create(array_merge(
            $validation->validated(),
            ['password' => bcrypt($request->password)]
        ));
        return response()->json(['token'=>$user], Response::HTTP_OK);
    }


    /**
     * @OA\Get(
     *     tags={"Auth"},
     *     path="/api/user/{id}",
     *     summary="Get user by ID",
     *     description="Returns a single user by ID",
     *     operationId="getUserById",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the user to fetch",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="User not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="string", example="User not found")
     *         )
     *     )
     * )
     */

    public function getUserById($id)
    {
        try {
            $user = User::where('id', $id)->first();
            if ($user) {
                return response()->json(['user' => $user], Response::HTTP_OK);
            } else {
                return response()->json(['error' => 'User not found'], Response::HTTP_NOT_FOUND);
            }
        } catch (ModelNotFoundException $exception) {
            return response()->json(['error' => 'User not found'], Response::HTTP_NOT_FOUND);
        }
    }


}
