<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home/Index')->name('home');
Route::inertia('/products', 'Products/Index')->name('products');

require __dir__.'/auth.php';