<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RestaurantController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    // Redirect to the dashboard
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {

    // Decide the user's position
    Route::get('/dashboard', function () {
        if (auth()->user()->account_type === 'restaurant') {
            return Inertia::render('Dashboard');
        } else {
            return redirect()->route('home');
        }
    })->name('dashboard');


    // Resrautaunt Admin Routes
    Route::prefix('/dashboard')->group(function () {
        Route::get('/', [RestaurantController::class, 'edit'])->name('dashboard');
        Route::post('/create', [RestaurantController::class, 'create'])->name('restaurant.create');
        Route::patch('/update', [RestaurantController::class, 'update'])->name('restaurant.update');
        Route::delete('/destroy', [RestaurantController::class, 'destroy'])->name('restaurant.destroy');
        Route::get('/{id}', [RestaurantController::class, 'restaurantSettings'])->name('restaurant.settings');
        Route::get('/{restaurant_id}/menu', [RestaurantController::class, 'showMenuItem'])->name('restaurant.menu');
    });
});

// Non-Restaurant Admin Routes
Route::get("/homepage", [RestaurantController::class, 'show'])->name("home");

Route::get('/restaurant', function () {
    return Inertia::render('RestaurantMenu');
})->name('restaurant');

// Profile Routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';
