<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Account extends Model
{   //*Enables the usage of laravel sanctum API tokens 
    use HasApiTokens,HasFactory,Notifiable;
    //* Specifies the primary key if "id" is not the default primary key
    protected $primaryKey = "account_id";
    protected $fillable = ["firstname", "lastname", "gmail", "username", "password"];

}
