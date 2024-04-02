import MenuCard from "@/Components/MenuCard";
import RestaurantCard from "@/Components/RestaurantCard";
import AuthenticatedIcons from "@/Layouts/AuthenticatedIcons";
import { Menu } from "@headlessui/react";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function Homepage({ auth, restaurants }) {
    const [restaurantSearch, setRestaurantSearch] = useState("");

    console.log(restaurants); // Check if restaurants prop is received correctly

    if (!restaurants) {
        return <div>Loading...</div>;
    }

    const handleSearch = (e) => {
        console.log(restaurantSearch);
        setRestaurantSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(restaurantSearch);
    };

    const isLoggedIn = false;

    return (
        <>
            <Head title="Homepage" />
            <div className="m-0">
                {auth.user ? (
                    <AuthenticatedIcons />
                ) : (
                    <>
                        <Link
                            href={route("login")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Log in
                        </Link>

                        <Link
                            href={route("register")}
                            className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Register
                        </Link>
                    </>
                )}
                <div className="w-[100%]">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg w-[100%]">
                        <div className="p-6 text-gray-900 lg:h-[40vh] sm:h-[20vh] md:h-[20vh] justify-center flex flex-col">
                            <div className="w-[100%]">
                                <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold lg:text-center md:text-center sm:text-justify my-2">
                                    You are searching for restaurants in
                                    <span className="text-red-600">
                                        {" "}
                                        {restaurantSearch || "your area"}
                                    </span>
                                </h1>

                                <form
                                    className="flex justify-center"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="justify-center flex">
                                        <input
                                            type="text"
                                            placeholder="Find the your taste . . ."
                                            value={restaurantSearch}
                                            onChange={handleSearch}
                                            className="rounded-md px-12 mt-6 border border-gray-800 text-center"
                                        />
                                        <button
                                            type="submit"
                                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md sm:mt-4 md:mt-5 mt-5 self-center ml-2"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    {restaurants.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.restaurant_id}
                            restaurant={restaurant}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
