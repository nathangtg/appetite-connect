import { Head, Link } from "@inertiajs/react";
import RestaurantDashboardCard from "@/Components/RestaurantDashboardCard";
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Dashboard({ auth, restaurants }) {
    console.log(restaurants);

    // Redirect logic
    if (auth.user.account_type !== "restaurant") {
        return (
            <>
                <Head title="Dashboard" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <p>
                            You are not authorized to access this page.{" "}
                            <Link href="/homepage">Go to Homepage</Link>
                        </p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Authenticated user={auth.user}>
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
        </>
    );
}
