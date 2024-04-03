import React from "react";
import RestaurantAdminLayout from "@/Layouts/RestaurantAdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function RestaurantMenuAdmin({ auth, restaurant, menuItems }) {
    return (
        <Authenticated user={auth.user}>
            <RestaurantAdminLayout
                user={auth.user}
                restaurant={restaurant}
                menuItems={menuItems}
            >
                <div>
                    <h2>Menu for {restaurant.name}</h2>
                    {menuItems.length > 0 ? (
                        <ul>
                            {menuItems.map((menuItem) => (
                                <li key={menuItem.menu_id}>
                                    <div>
                                        <img
                                            src={menuItem.image_path}
                                            alt={menuItem.name}
                                        />
                                    </div>
                                    <div>
                                        <h3>{menuItem.name}</h3>
                                        <p>{menuItem.description}</p>
                                        <p>${menuItem.price}</p>
                                        <p>Category: {menuItem.category}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No menu items available</p>
                    )}
                </div>
            </RestaurantAdminLayout>
        </Authenticated>
    );
}
