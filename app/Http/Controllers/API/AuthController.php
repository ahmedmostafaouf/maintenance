<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Traits\ResponseTrait;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\API\LoginRequest;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    use ResponseTrait;
    public function login(LoginRequest $request){
        $user = User::where('email', $request->email)->first();
        if (! $user || ! Hash::check($request->password, $user->password))
            return $this->validationError([ 'email' => [__('auth.failed')],]);

        $user->accessToken = $user->createToken('token-name', ['server:update'])->plainTextToken;
        return $this->returnData('data', $user, 'User Authenticated Successfully');
    }

    /**this method signs out users by removing tokens
     * @param Request $request
     */
    public function signout(Request $request) :void
    {
        $request->user()->currentAccessToken()->delete();
    }

}
