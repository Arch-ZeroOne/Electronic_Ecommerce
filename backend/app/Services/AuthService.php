<?php
//* This file will handle the logic for the queries using the models

namespace App\Services;

use App\Models\Account;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthService{

    //TODO Understand rehashing 
    //TODO Validate the user and continue doing the log in function


    public function index(array $data){
         $userExists = Account::where("username",$data["username"], ) -> where("password",$data["password"]) -> get();

         return $userExists;

    }
    public function register(array $data){

    $registeredUser =  Account::create([
            "firstname" => $data["firstname"],
            "lastname" => $data["lastname"],
            "gmail" => $data["gmail"],
            "username" => $data["username"],
            "password" => Hash::make($data["password"])
        ]);

        return $registeredUser;


    }

    public function login(array $data){

        $userExists = Account::where(["username",$data["username"], "password", $data["password"]]);


        if(!$userExists){
            return null;

        }
        return $userExists;
    }

}

