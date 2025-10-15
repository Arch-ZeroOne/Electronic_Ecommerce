<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Services\AuthService;

class AuthController extends Controller
{


    //* creates an object representing AuthService.php constructor to help on using the available methods in this class
    public function __construct(private AuthService $authService){}

    public function register(AuthRequest $request){
        //* uses the function from the authService to register the user
        $registeredUser = $this -> authService -> register($request -> validated());
        //* Issues a token for automatic log in 
        $token = $registeredUser -> createToken('api-token') -> plainTextToken;

        
        //* returns the registered user
        return response() -> json(["user" => $registeredUser, "token" => $token]);
        
        
    }
    public function login(){
    
    }
}
