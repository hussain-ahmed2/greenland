<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Email;
use Illuminate\Validation\Rules\Password;

class RegisteredUserController extends Controller
{
    public function create() {
        return inertia('Auth/Register');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'min:3'],
            'email' => ['required', Email::defaults(), 'unique:users'],
            'password' => ['required', Password::defaults(), 'confirmed'],
        ]);

        $user = User::create($validatedData);

        Auth::login($user);

        $request->session()->regenerate();

        return redirect()->intended(route('user.dashboard'));
    }
}
