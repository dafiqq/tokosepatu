<?php

use App\Http\Controllers\CatalogController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\HelpController;
use App\Http\Controllers\KeranjangController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/catalog',[ProductController::class,'index'])->name('catalog.index');
Route::get('/about',[AboutController::class,'index'])->name('about.index');
Route::get('/help',[HelpController::class,'index'])->name('help.index');
Route::get('/keranjang',[KeranjangController::class,'index'])->name('keranjang.index');
Route::post('/keranjang/store', [KeranjangController::class, 'store'])->name('keranjang.store');

require __DIR__.'/auth.php';
