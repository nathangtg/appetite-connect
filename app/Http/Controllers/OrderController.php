<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    // Customer Order CRUD Operations
    public function createOrder(Request $request)
    {
        $order = new Order();

        $order->customer_id = $request->customer_id;
        $order->restaurant_id = $request->restaurant_id;
        $order->menu_id = $request->menu_id;
        $order->quantity = $request->quantity;
        $order->total = $request->total;

        // Save the order to the database
        $order->save();

        // Redirect with success message
        return Inertia::render('OrderSuccess', ['order' => $order]);
    }
}
