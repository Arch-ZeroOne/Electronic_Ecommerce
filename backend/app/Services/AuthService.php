<?php
//* This file will handle the logic for the queries using the models

namespace App\Services;

use App\Models\Account;
use Illuminate\Support\Facades\Hash;

class AuthService{
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


}

