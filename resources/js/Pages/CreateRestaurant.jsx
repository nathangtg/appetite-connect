import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    const {
        data,
        setData,
        post,
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

    const handleSubmit = (e) => {
        console.log(auth.user.user_id);
        e.preventDefault();
        const formData = {
            user_id: auth.user.user_id,
            name: data.name,
            location: data.location,
            description: data.description,
            image_path: data.image_path,
            cuisine: data.cuisine,
            preparation_time: data.preparation_time,
        };
        post(route("restaurant.create"), formData);
    };

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Restaurant Information
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Restaurant Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={data.name}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="location"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        value={data.location}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="description"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        value={data.description}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="image_path"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Image Path
                                    </label>
                                    <input
                                        type="text"
                                        name="image_path"
                                        id="image_path"
                                        value={data.image_path}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="cuisine"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Cuisine
                                    </label>
                                    <input
                                        type="text"
                                        name="cuisine"
                                        id="cuisine"
                                        value={data.cuisine}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="preparation_time"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Preparation Time
                                    </label>
                                    <input
                                        type="text"
                                        name="preparation_time"
                                        id="preparation_time"
                                        value={data.preparation_time}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                    disabled={processing}
                                >
                                    {processing ? "Saving..." : "Save"}
                                </button>
                            </form>
                            {errors && (
                                <div className="text-red-500">
                                    {/* Display validation errors if any */}
                                    {Object.values(errors).map(
                                        (error, index) => (
                                            <div key={index}>{error}</div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
