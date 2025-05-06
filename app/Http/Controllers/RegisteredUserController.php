<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Email;
use Illuminate\Validation\Rules\Password;

class RegisteredUserController extends Controller
{
    public function create() {
        return inertia('Auth/Register');
    }

    public function store(Request $request) {
        $credentials = $request->validate([
            'name' => ['required', 'min:3'],
            'email' => ['required', Email::defaults(), 'unique:'.User::class],
            'password' => ['required', Password::defaults(), 'confirmed']
        ]);
        
        User::create($credentials);

        return redirect()->route('home');
    }
}
