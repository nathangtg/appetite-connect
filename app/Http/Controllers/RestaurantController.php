<?php

namespace App\Http\Controllers;

use App\Models\Restaurant; // Import the Restaurant model
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class RestaurantController extends Controller
{
    public function edit(Request $request)
    {
        $restaurants = Restaurant::where('user_id', $request->user()->id)->get();
        return Inertia::render('Dashboard', ['restaurants' => $restaurants]);
    }

    public function update(Request $request)
    {
        $restaurant = Restaurant::where('user_id', $request->user()->id)->first();

        if (!$restaurant) {
            $restaurant = new Restaurant();
            $restaurant->user_id = $request->user()->id;
        }

        $restaurant->fill($request->all());
        $restaurant->save();

        Log::info('Restaurant profile updated', ['restaurant_id' => $restaurant->restaurant_id]);

        return Redirect::route('dashboard')->with('success', 'Restaurant profile updated successfully');
    }

    public function create(Request $request)
    {
        $user_id = Auth::id();

        $restaurant = new Restaurant();
        $restaurant->user_id = $user_id;
        $restaurant->name = $request->name;
        $restaurant->location = $request->location;
        $restaurant->description = $request->description;
        $restaurant->image_path = $request->image_path;
        $restaurant->cuisine = $request->cuisine;
        $restaurant->preparation_time = $request->preparation_time;
        $restaurant->save();

        Log::info('Restaurant created', ['restaurant_id' => $restaurant->id]);

        return Redirect::route('restaurant.edit')->with('success', 'Restaurant created successfully');

    }

    public function destroy(Request $request)
    {
        $restaurant = Restaurant::where('user_id', $request->user()->id)->first();
        $restaurant->delete();

        Log::info('Restaurant deleted', ['restaurant_id' => $restaurant->id]);

        return Redirect::route('dashboard')->with('success', 'Restaurant deleted successfully');
    }

    public function show(Request $request)
    {
        $restaurants = DB::table('restaurants')->get();
        Log::info('All restaurants', ['restaurants' => $restaurants]);
        return Inertia::render('Homepage', ['restaurants' => $restaurants]);
    }

    public function restaurantSettings(Request $request)
    {
        $restaurant = Restaurant::where('restaurant_id', $request->id)->first();
        Log::info('Restaurant settings', ['restaurant' => $restaurant]);
        return Inertia::render('RestaurantSettings', ['restaurant' => $restaurant]);
    }

}
