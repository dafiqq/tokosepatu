<?php

use App\Http\Controllers\SepatuController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\BarangTerjualController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\HelpController;
use App\Http\Controllers\KeranjangController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TambahBarangController;
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

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/catalog',[ProductController::class,'index'])->name('catalog.index');
Route::get('/about',[AboutController::class,'index'])->name('about.index');
Route::get('/help',[HelpController::class,'index'])->name('help.index');
Route::get('/keranjang',[KeranjangController::class,'index'])->name('keranjang.index');
Route::get('/barangterjual', [BarangTerjualController::class, 'index'])->name('barangterjual.index');
Route::post('/keranjang/store', [KeranjangController::class, 'store'])->name('keranjang.store');
Route::post('/keranjang/{id}', [KeranjangController::class, 'destroy'])->name('keranjang.hapus');
Route::post('/product', [ProductController::class, 'store'])->name('product.store');
Route::get('/TambahBarang', [TambahBarangController::class, 'index'])->name('TambahBarang.index');
Route::post('/TambahBarang/store', [TambahBarangController::class, 'store'])->name('TambahBarang.store');




require __DIR__.'/auth.php';
