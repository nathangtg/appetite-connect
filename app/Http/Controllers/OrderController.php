<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderedItems;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class OrderController extends Controller
{
    // Customer Order CRUD Operations
    public function createOrder(Request $request) {
        // Create a new order instance
        $order = new Order();

        // Set order details
        $order->user_id = auth()->user()->id;
        $order->restaurant_id = $request->restaurant_id;
        $order->status = $request->status;
        $order->total = $request->total_price;

        // Save the order to the database
        $order->save();

        Log::info($request->items);

        // Save order items
        foreach ($request->items as $item) {

            Log::info($item);

            $orderItem = new OrderedItems();
            $orderItem->order_id = $order->id;
            $orderItem->menu_id = $item['id'];
            $orderItem->quantity = $item['quantity'];
            $orderItem->total_price = $item['price'];
            $orderItem->save();
        }

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

