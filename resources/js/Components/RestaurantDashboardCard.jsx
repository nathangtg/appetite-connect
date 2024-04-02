import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

export default function RestaurantDashboardCard({ restaurant }) {
    return (
        <motion.div whileHover={{ scale: 1.05 }} className="mb-4">
            <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div className="p-6 sm:px-20 bg-white border-b border-gray-200">
                    <h1 className="text-2xl font-semibold mb-4">
                        {restaurant.name}
                    </h1>
                    <p className="text-gray-700 mb-2">
                        Location: {restaurant.location}
                    </p>
                    <p className="text-gray-700 mb-2">
                        Description: {restaurant.description}
                    </p>
                    <p className="text-gray-700 mb-2">
                        Cuisine: {restaurant.cuisine}
                    </p>
                    <p className="text-gray-700 mb-2">
                        Preparation Time: {restaurant.preparation_time}
                    </p>
                    <Link
                        href={`dashboard/${restaurant.restaurant_id}`}
                        className="text-blue-500 hover:underline"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
