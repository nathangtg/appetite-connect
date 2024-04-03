import React, { useState } from "react";
import { motion } from "framer-motion";

export default function RestaurantAdminLayout({ children, restaurant, user }) {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="flex">
            {/* Sidebar for mobile */}
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
                <ul className="py-4">
                    <li className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                        Restaurant Settings
                    </li>
                    <li className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                        Restaurant Statistics
                    </li>
                    <li className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                        Orders
                    </li>
                    {/* Add more navigation items as needed */}
                </ul>
            </motion.div>
            {/* Sidebar for desktop */}
            <div className="hidden lg:flex flex-col h-screen bg-gray-800 w-48">
                <div className="flex items-center justify-center h-16 bg-gray-900 text-white">
                    {restaurant.name}
                </div>
                <ul className="py-4">
                    <li className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                        Restaurant Settings
                    </li>
                    <li className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                        Restaurant Statistics
                    </li>
                    <li className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
                        Orders
                    </li>
                    {/* Add more navigation items as needed */}
                </ul>
            </div>
            {/* Main content */}
            <div className="flex-grow bg-gray-200">
                <div className="p-4">{children}</div>
            </div>
            {/* Mobile disclosure button */}
            <motion.button
                onClick={toggleSidebar}
                initial={{ x: "-100%" }}
                animate={{ x: showSidebar ? 0 : "-100%" }}
                transition={{ duration: 0.3 }}
                className="lg:hidden fixed bottom-4 right-4 z-50 p-3 rounded-full bg-gray-800 text-white"
            >
                {showSidebar ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M13.707 5.293a1 1 0 00-1.414 1.414L13.586 8l-1.293 1.293a1 1 0 001.414 1.414l1.822-1.822a.5.5 0 000-.707l-1.822-1.822zm-1.414 8.414a1 1 0 001.414-1.414L10.414 12l1.293-1.293a1 1 0 00-1.414-1.414L8.293 10.293a.5.5 0 000 .707l1.822 1.822zm-6.707-6.707a1 1 0 011.414-1.414L6.414 8l-1.293-1.293a1 1 0 011.414-1.414L8.293 6.293a.5.5 0 010 .707l-1.822 1.822zM3 10a7 7 0 1114 0A7 7 0 013 10zm7-6a6 6 0 100 12 6 6 0 000-12z"
                            clipRule="evenodd"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M13.707 5.293a1 1 0 00-1.414 1.414L13.586 8l-1.293 1.293a1 1 0 001.414 1.414l1.822-1.822a.5.5 0 000-.707l-1.822-1.822zm-1.414 8.414a1 1 0 001.414-1.414L10.414 12l1.293-1.293a1 1 0 00-1.414-1.414L8.293 10.293a.5.5 0 000 .707l1.822 1.822zm-6.707-6.707a1 1 0 011.414-1.414L6.414 8l-1.293-1.293a1 1 0 011.414-1.414L8.293 6.293a.5.5 0 010 .707l-1.822 1.822zM3 10a7 7 0 1114 0A7 7 0 013 10zm7-6a6 6 0 100 12 6 6 0 000-12z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </motion.button>
        </div>
    );
}