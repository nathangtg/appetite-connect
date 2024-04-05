import { useState } from "react";
import MenuCard from "@/Components/MenuCard";
import RestaurantLayout from "@/Layouts/RestaurantLayout";
import Cart from "@/Components/Cart";

export default function RestaurantMenu({ restaurant, menuItems }) {
    const [cartItems, setCartItems] = useState([]);

    const handleQuantityChange = (itemId, quantity) => {
        // Handle quantity change logic here
    };

    return (
        <>
            <RestaurantLayout restaurant={restaurant}>
                <h1>Restaurant Menu</h1>
                <div className="flex justify-center">
                    <div className="flex flex-col">
                        {menuItems.map((item) => (
                            <MenuCard
                                key={item.id}
                                itemId={item.id}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                imageSrc={item.imageSrc}
                                onQuantityChange={handleQuantityChange}
                            />
                        ))}
                    </div>
                </div>
            </RestaurantLayout>
            <div className="flex justify-center">
                {cartItems.length > 0 && <Cart items={cartItems} />}
            </div>
        </>
    );
}
