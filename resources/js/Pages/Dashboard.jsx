import { Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import RestaurantDashboardCard from "@/Components/RestaurantDashboardCard";

export default function Dashboard({ auth, restaurants }) {
    console.log(restaurants);

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {restaurants.map((restaurant) => (
                        <RestaurantDashboardCard
                            key={restaurant.restaurant_id}
                            restaurant={restaurant}
                        />
                    ))}
                </div>
            </div>
        </Authenticated>
    );
}
