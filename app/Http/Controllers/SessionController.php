<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Email;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class SessionController extends Controller
{
    public function create() {
        return inertia('Auth/Login');
    }

    public function store(Request $request) {
        $user = $request->validate([
            'email' => ['required', Email::defaults()],
            'password' => ['required', Password::defaults()]
        ]);

        if (! Auth::attempt($user)) {
            throw ValidationException::withMessages([
                'email' => 'sorry, those credentials do not match.'
            ]);
        }

        $request->session()->regenerate();
        
        return redirect(route('user.dashboard'));
    }
}
