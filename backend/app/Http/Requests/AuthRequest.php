<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {   

    return [
        "firstname" => ["required","max:45"],
        "lastname"  => ["required","max:45"],
        "gmail" => ["required","email"],
        "username" => ["required","unique:accounts"],
        "password" => ["required", "max:30"]
        ];
    }
}
