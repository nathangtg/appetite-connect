import React from "react";
import { useState } from "react";
import { usePage, useForm } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import RestaurantAdminLayout from "@/Layouts/RestaurantAdminLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import ImageUploadInput from "@/Components/UploadImageInput";

export default function RestaurantMenuAdmin({ auth, restaurant, menuItems }) {
    const [editingMenuItem, setEditingMenuItem] = useState(null);
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const {
        data,
        setData,
        put,
        errors,
        post,
        processing,
        reset,
        recentlySuccessful,
    } = useForm();

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        if (selectedFile) {
            setPreviewUrl(URL.createObjectURL(selectedFile));
        } else {
            setPreviewUrl(null);
        }
        console.log(selectedFile);
    };

    const handleEditMenuItem = (menuItem) => {
        setEditingMenuItem(menuItem);
        setData({
            id: menuItem.menu_id,
            name: menuItem.name,
            description: menuItem.description,
            image_path: menuItem.image_path,
            price: menuItem.price,
            category: menuItem.category,
        });
    };

    const submitMenuItem = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("category", data.category);

        // Check if a file is selected
        if (data.image_path && file) {
            formData.append("image_path", data.image_path);
            formData.append("image", file);
            console.log("File selected", file);
            console.log("Image path", data.image_path);
        }

        // Send the form data including the file
        await post(
            route("restaurant.updateMenuItem", {
                restaurant_id: restaurant.restaurant_id,
                menu_id: editingMenuItem.menu_id,
            }),
            formData
        );
        setEditingMenuItem(null); // Reset editing state after successful submission
    };

    const cancelEdit = () => {
        setEditingMenuItem(null);
        reset();
    };

    const handleAddMenuItem = async (e) => {
        e.preventDefault();
        await put(
            route("restaurant.createMenuItem", restaurant.restaurant_id),
            data
        );
    };

    return (
        <Authenticated user={auth.user}>
            <RestaurantAdminLayout restaurant={restaurant} user={auth.user}>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Menu Items</h2>
                    {/* Existing menu items table */}
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Description
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Image
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Category
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {menuItems.map((menuItem) => (
                                <tr key={menuItem.menu_id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {editingMenuItem &&
                                        editingMenuItem.menu_id ===
                                            menuItem.menu_id ? (
                                            <TextInput
                                                id="name"
                                                className="w-full"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        ) : (
                                            menuItem.name
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {editingMenuItem &&
                                        editingMenuItem.menu_id ===
                                            menuItem.menu_id ? (
                                            <TextInput
                                                id="description"
                                                className="w-full"
                                                value={data.description}
                                                onChange={(e) =>
                                                    setData(
                                                        "description",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        ) : (
                                            menuItem.description
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {editingMenuItem &&
                                        editingMenuItem.menu_id ===
                                            menuItem.menu_id ? (
                                            <div>
                                                <input
                                                    type="file"
                                                    onChange={handleFileChange}
                                                />
                                                {previewUrl && (
                                                    <img
                                                        src={previewUrl}
                                                        alt="Preview"
                                                    />
                                                )}
                                            </div>
                                        ) : (
                                            <img
                                                src={menuItem.image_path}
                                                alt="Menu Item"
                                                style={{
                                                    maxWidth: "100px",
                                                    maxHeight: "100px",
                                                }}
                                            />
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {editingMenuItem &&
                                        editingMenuItem.menu_id ===
                                            menuItem.menu_id ? (
                                            <TextInput
                                                id="price"
                                                className="w-full"
                                                value={data.price}
                                                onChange={(e) =>
                                                    setData(
                                                        "price",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        ) : (
                                            menuItem.price
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {editingMenuItem &&
                                        editingMenuItem.menu_id ===
                                            menuItem.menu_id ? (
                                            <TextInput
                                                id="category"
                                                className="w-full"
                                                value={data.category}
                                                onChange={(e) =>
                                                    setData(
                                                        "category",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        ) : (
                                            menuItem.category
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                                        {editingMenuItem &&
                                        editingMenuItem.menu_id ===
                                            menuItem.menu_id ? (
                                            <div>
                                                <PrimaryButton
                                                    onClick={submitMenuItem}
                                                    disabled={processing}
                                                >
                                                    Save
                                                </PrimaryButton>
                                                <SecondaryButton
                                                    onClick={cancelEdit}
                                                >
                                                    Cancel
                                                </SecondaryButton>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    handleEditMenuItem(menuItem)
                                                }
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                Edit
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-4">
                        <PrimaryButton onClick={handleAddMenuItem}>
                            Add Menu Item
                        </PrimaryButton>
                    </div>
                </div>
            </RestaurantAdminLayout>
        </Authenticated>
    );
}
