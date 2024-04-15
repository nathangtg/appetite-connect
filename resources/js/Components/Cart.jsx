import React from "react";
import { useForm } from "@inertiajs/react";

export default function Cart({ items, incrementItem, user, restaurant }) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        items: items.filter((item) => item.quantity > 0),
        customer_id: user.id,
        items: items.map((item) => ({
            name: item.title,
            menu_id: item.menu_id,
            quantity: item.quantity,
            total: item.quantity * item.price,
        })),
        status: "Pending",
    });

    // Function to check if an item with a given ID exists in the cart
    const itemExists = (itemId) => {
        return items.some((item) => item.id === itemId);
    };

    // Function to get the index of an item with a given ID in the cart
    const getItemIndex = (itemId) => {
        return items.findIndex((item) => item.id === itemId);
    };

    // Function to format price to two decimal places
    const formatPrice = (price) => {
        return parseFloat(price).toFixed(2);
    };

    // Calculate total price
    const totalPrice = Number(
        items
            .filter((item) => item.quantity > 0) // Filter out items with quantity less than or equal to 0
            .reduce(
                (total, item) =>
                    total + parseFloat(item.quantity) * parseFloat(item.price),
                0
            )
            .toFixed(2)
    ); // Using toFixed to round to 2 decimal places and then convert back to number

    // Function to handle placing the order
    const placeOrder = (e) => {
        console.log("Order placed!");

        e.preventDefault();
        const orderData = {
            items: items.filter((item) => item.quantity > 0), // Filter out items with quantity less than or equal to 0
            user_id: user.id, // Assuming user object contains user information
            restaurant_id: restaurant.restaurant_id, // Assuming restaurant object contains restaurant information
            total_price: totalPrice,
            items: items.map((item) => ({
                name: item.title,
                menu_id: item.menu_id,
                quantity: item.quantity,
                total: item.quantity * item.price,
            })),
            status: "Pending",
            total: totalPrice,
        };

        console.log(orderData);

        // Send order data to the server
        post(
            route("orders.createOrder", {
                restaurant_id: restaurant.restaurant_id,
            }),
            orderData
        );
    };

    return (
        <>
            {totalPrice > 0 && ( // Only render if totalPrice is greater than 0
                <div className="self-center">
                    <h2 className="text-2xl font-bold mb-4">Your Order</h2>
                    <ul>
                        {items.map(
                            (item, index) =>
                                item.quantity > 0 && ( // Render item only if quantity is greater than 0
                                    <div
                                        className="flex items-center w-96 border-b border-gray-200 py-4"
                                        key={index}
                                    >
                                        <img
                                            className="w-24 h-24 mr-4 rounded-full"
                                            src={item.imageSrc}
                                            alt={item.title}
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                Price per item: $
                                                {formatPrice(item.price)}
                                            </p>
                                            <p className="text-gray-600">
                                                Quantity: {item.quantity}
                                            </p>
                                        </div>
                                        <p className="text-lg font-semibold">
                                            $
                                            {formatPrice(
                                                item.quantity * item.price
                                            )}
                                        </p>
                                    </div>
                                )
                        )}
                    </ul>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-xl font-semibold">
                            Total Price: ${totalPrice}
                        </p>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={placeOrder}
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
