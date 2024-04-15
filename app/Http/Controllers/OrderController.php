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

        $order->user_id = auth()->user()->id;
        $order->restaurant_id = $request->restaurant_id;
        $order->status = 'pending';

        // Calculate the total
        $order->total = $request->quantity * $request->price;

        $order->total = $request->total;

        // Save the order to the database
        $order->save();

        // Redirect with success message
        return Inertia::render('OrderSuccess', ['order' => $order]);
    }

    public function showOrders(Request $request)
    {
        $orders = Order::where('restaurant_id', $request->restaurant_id)->get();

        return Inertia::render('RestaurantOrders', ['orders' => $orders]);
    }

    public function updateOrder(Request $request)
    {
        $order = Order::findOrFail($request->order_id);
        $order->status = $request->status;

        // Save the changes
        $order->save();
    }
}
