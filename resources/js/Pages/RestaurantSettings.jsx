import { useState } from "react";
import { Head, useForm } from "@inertiajs/react";

export default function RestaurantSettings({ user, auth, restaurant }) {
    const {
        data,
        setData,
        patch,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        user_id: auth.user.id,
        name: "",
        location: "",
        description: "",
        image_path: "",
        cuisine: "",
        preparation_time: "",
    });

    // Update the form data with the restaurant details
    useState(() => {
        setData({
            ...data,
            name: restaurant.name,
            location: restaurant.location,
            description: restaurant.description,
            cuisine: restaurant.cuisine,
            preparation_time: restaurant.preparation_time,
        });
    }, [restaurant]);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, for example, sending updated data to a backend API
        console.log(data);

        patch(route("restaurant.update"), data); // Using patch  to send PATCH request
    };

    console.log(restaurant);

    return (
        <div>
            <Head>
                <title>Restaurant Settings</title>
            </Head>
            <h1 className="text-2xl font-semibold mb-4">Restaurant Settings</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="location"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Location:
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={data.location}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Description:
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="cuisine"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Cuisine:
                    </label>
                    <input
                        type="text"
                        id="cuisine"
                        name="cuisine"
                        value={data.cuisine}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="preparation_time"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Preparation Time:
                    </label>
                    <input
                        type="text"
                        id="preparation_time"
                        name="preparation_time"
                        value={data.preparation_time}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
}
