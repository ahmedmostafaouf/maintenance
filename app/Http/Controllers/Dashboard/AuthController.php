<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\LoginRequest;
use App\Http\Resources\Dashboard\UserResource;
use App\Http\Traits\ResponseTrait;
use App\Mail\ResPasswordMail;
use App\Models\PasswordResets;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    use ResponseTrait;
    public function login(LoginRequest $request){
        $user = User::where('email', $request->email)->orwhere('name',$request->email)->first();
        if (! $user || ! Hash::check($request->password, $user->password))
            return $this->validationError([ 'email' => [__('auth.failed')],]);

        return $this->returnData('data', new UserResource($user->load('group')), 'User Authenticated Successfully');
    }

    /**this method signs out users by removing tokens
     * @param Request $request
     */
    public function signout(Request $request) :void
    {
        $request->user()->currentAccessToken()->delete();
    }
    public function restPassword(Request $request){

       $user= User::where('email',$request->userEmail)->first();
       if(!$user){
           return $this->returnError(500,'البريد الالكتروني خطا ادخل بريد الكتروني صحيح');
       }else{
           $token=rand(10000,1000000);
           Mail::to($user)->send(new ResPasswordMail($token));
           DB::table('password_resets')->insert(['email'=>$user->email,'token'=>$token]);
       }

    }
    public function checkToken(Request $request){
       $userToken= PasswordResets::where('token',$request->token)->first();
        if(!$userToken){
            return $this->returnError(500,'الكود غير صحيح اتاكد من الكود واعد المحاولة');
        }else{
            PasswordResets::where('email',$userToken->email)->delete();
            $user=User::where('email',$userToken->email)->first();

            return $this->returnData('data',$user,'العملية ناجحه كمل الخطوات');
        }
    }
    public function changePassword(Request $request){
        $email=trim($request->userEmail,'""');
        $user=User::where('email',$email)->first();
        if($user){
            //dd($request->new_password);
            $user->update(['password'=>$request->new_password]);
            return $this->returnSuccessMessage('تم التغير بنجاح');
        }else{
            return $this->returnError(500,'البريد الالكتروني غير صحيح اتاكد من البريد الالكتروني واعد المحاولة');

        }

    }

}
