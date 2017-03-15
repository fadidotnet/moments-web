<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Auth;

use Illuminate\Support\Facades\Mail;
use App\Mail\WellcomeEmail;
use Kamaln7\Toastr\Facades\Toastr;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */
    

    use AuthenticatesUsers;
    public $isFirstTImeLogin = false;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
//    protected $loginPath = '/login';
//    protected $redirectTo = '/search'; 
//    protected $redirectAfterLogout = '/';
    public function showLoginForm()
    {
        // if(!session()->has('from')){
            session()->put('from', url()->previous());
        // }
        return view('auth.login');
    }

    /**
     * Handle a login request to the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $this->validateLogin($request);

        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        $credentials = $this->credentials($request);

        if ($this->guard()->attempt($credentials, $request->has('remember'))) {
            $user = Auth::user(); 
            if($user->confirmsFirstTimeLogin()){
                Mail::to($user->email)->send(new WellcomeEmail($user));
                $this->isFirstTImeLogin = true;
            }
            return $this->sendLoginResponse($request);
        }

        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        $this->incrementLoginAttempts($request);

        return $this->sendFailedLoginResponse($request);
    }

    public function authenticated($request,$user)
    {   $this->isFirstTImeLogin? Toastr::success('Welcome to airdryft', "Hey! {$user->fname}") : null;
        $this->isFirstTImeLogin = false;
        return redirect(session()->pull('from'));
    }

    protected function credentials(Request $request)
    {
        return $request->only($this->username(), 'password') + ['verified'=>true];
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }
}
