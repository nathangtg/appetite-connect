import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

export default function RestaurantAdminLayout({ children, restaurant, user }) {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    // Check if User's account is registered as the restaurant User Admin
    const isAuthorized = user && user.id === restaurant.user_id;

    return (
        <div className="flex">
            {/* Mobile Sidebar */}
            <motion.div
                initial={{ x: "-100%", width: "0px" }}
                animate={{
                    x: showSidebar ? 0 : "-100%",
                    width: showSidebar ? "auto" : "0px",
                }}
                transition={{ duration: 0.3 }}
                className={`bg-gray-800 w-48 flex-none h-screen lg:hidden ${
                    showSidebar ? "block" : "hidden"
                }`}
            >
                <div className="flex items-center justify-center h-16 bg-gray-900 text-white">
                    {restaurant.name}
                </div>
                <div className="py-4 flex flex-col">
                    <Link className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                        Restaurant Settings
                    </Link>
                    <Link className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                        Restaurant Statistics
                    </Link>
                    <Link className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                        Orders
                    </Link>
                    <Link
                        href={`/dashboard/${restaurant.restaurant_id}/menu`}
                        className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
                    >
                        Menu
                    </Link>
                    {/* Add more navigation items as needed */}
                </div>
            </motion.div>

            {/* Sidebar for desktop */}
            <div className="hidden lg:flex flex-col h-screen bg-gray-800 w-48">
                <div className="flex items-center justify-center h-16 bg-gray-900 text-white">
                    {restaurant.name}
                </div>
                <div className="py-4 flex flex-col">
                    <Link
                        href={`/dashboard/${restaurant.restaurant_id}`}
                        className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
                    >
                        Restaurant Settings
                    </Link>
                    <Link className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                        Restaurant Statistics
                    </Link>
                    <Link className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                        Orders
                    </Link>
                    <Link
                        href={`/dashboard/${restaurant.restaurant_id}/menu`}
                        className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
                    >
                        Menu
                    </Link>
                    {/* Add more navigation items as needed */}
                </div>
            </div>

            {/* Main content */}
            <div className="flex-grow bg-gray-200">
                {/* Conditionally render children or "Not Authorized" */}
                {isAuthorized ? (
                    <div className="p-4">{children}</div>
                ) : (
                    <div className="p-4 text-red-600">Not Authorized</div>
                )}
            </div>

            {/* Mobile disclosure button */}
            <motion.button
                onClick={toggleSidebar}
                initial={{ x: "-100%" }}
                animate={{ x: showSidebar ? 0 : "-100%" }}
                transition={{ duration: 0.3 }}
                className="lg:hidden fixed bottom-4 right-4 z-50 p-3 rounded-full bg-gray-800 text-white"
            >
                {/* Disclosure button icon */}
            </motion.button>
        </div>
    );
}
