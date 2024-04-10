<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class MenuController extends Controller
{
        // RESTAURANT MENU CRUD OPERATIONS
        public function createMenuItem(Request $request)
        {
            $menuItem = new Menu();

            $restaurant = Restaurant::where('restaurant_id', $request->restaurant_id)->first();

            $menuItem->restaurant_id = $request->restaurant_id;
            $menuItem->name = $request->name;
            $menuItem->description = $request->description;
            $menuItem->price = $request->price;
            $menuItem->category = $request->category;
            $menuItem->image_path = $request->image_path;

            // Image Path
            $imagePath = $request->file('image_path')->store('images', 'public');

            // Log Image Path
            Log::info('Image Path', ['image_path' => $imagePath]);

            // Save the menu item to the database
            $menuItem->save();
            $menuItems = Menu::where('restaurant_id', $restaurant->restaurant_id)->get();
            // Redirect with success message
            return Inertia::render('RestaurantMenuAdmin', ['restaurant' => $restaurant, 'menuItems' => $menuItems]);
        }

        public function addMenuPicture(Request $request)
        {
            $menuItem = Menu::findOrFail($request->menu_id);

            // Store the image in the public disk
            $imagePath = $request->file('image_path')->store('images', 'public');

            // Assign the new image path
            $menuItem->image_path = $imagePath;

            // Save the changes
            $menuItem->save();
        }


        public function updateMenuItem(Request $request)
        {
            // Find the menu item by its ID
            $menuItem = Menu::findOrFail($request->menu_id);

            // Initialize $imagePath variable
            $imagePath = $menuItem->image_path;

            // Check if a file was uploaded
            if ($request->hasFile('image_path')) {
                $imagePath = $request->file('image_path')->store('images', 'public');
                $imagePath = $request->image_path;

                // Assign the new image path
                $menuItem->image_path = $imagePath;
            }

            // Update other menu item attributes
            $menuItem->name = $request->name;
            $menuItem->description = $request->description;
            $menuItem->price = $request->price;
            $menuItem->category = $request->category;
            $menuItem->image_path = $imagePath;

            // Save the changes
            $menuItem->save();

            // Log the update
            Log::info('Menu item updated', ['menu_id' => $menuItem->menu_id]);
            Log::info('Image: ' . $menuItem->image_path);

            // Redirect with success message
            return redirect()->route('restaurant.settings', ['id' => $menuItem->restaurant_id])->with('success', 'Menu item updated successfully');
        }



        public function deleteMenuItem(Request $request)
        {
            // Find the menu item by its ID
            $menuItem = Menu::findOrFail($request->menu_id);
            $menuItem->delete();
            $restaurant = Restaurant::where('restaurant_id', $request->restaurant_id)->first();

            return Redirect::route('restaurant.settings', ['id' => $restaurant->restaurant_id])->with('success', 'Menu item deleted successfully');
        }

        public function showMenuItem(Request $request)
        {
            $restaurant = Restaurant::where('restaurant_id', $request->restaurant_id)->first();
            if (!$restaurant) {
                return response()->json(['error' => 'Restaurant not found'], 404);
            }

            $menuItems = Menu::where('restaurant_id', $restaurant->restaurant_id)->get();

            return Inertia::render('RestaurantMenuAdmin', ['restaurant' => $restaurant, 'menuItems' => $menuItems]);
        }

        // CUSTOMER MENU OPERATIONS
        public function showMenu(Request $request)
        {
            $restaurant = Restaurant::where('restaurant_id', $request->restaurant_id)->first();
            if (!$restaurant) {
                return response()->json(['error' => 'Restaurant not found'], 404);
            }

            $menuItems = Menu::where('restaurant_id', $restaurant->restaurant_id)->get();

            return Inertia::render('RestaurantMenu', ['restaurant' => $restaurant, 'menuItems' => $menuItems]);
        }
}
