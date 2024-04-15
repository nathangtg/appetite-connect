import { useState } from "react";
import MenuCard from "@/Components/MenuCard";
import RestaurantLayout from "@/Layouts/RestaurantLayout";
import Cart from "@/Components/Cart";

export default function RestaurantMenu({ restaurant, menuItems, auth, cart }) {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const handleQuantityChange = (itemId, quantity) => {
        // Find the index of the item in the cart
        const itemIndex = cartItems.findIndex(
            (item) => item.menu_id === itemId
        );

        if (itemIndex !== -1) {
            // If the item exists in the cart, update its quantity
            const updatedCartItems = [...cartItems];
            updatedCartItems[itemIndex] = {
                ...updatedCartItems[itemIndex],
                quantity: quantity,
            };
            setCartItems(updatedCartItems);
        } else if (quantity > 0) {
            // If the item doesn't exist in the cart and the quantity is greater than 0, add it to the cart
            const newItem = menuItems.find((item) => item.menu_id === itemId);
            setCartItems((prevCartItems) => [
                ...prevCartItems,
                { ...newItem, quantity: quantity },
            ]);
        }
    };

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    const cartItemsData = menuItems.map((item) => {
        const cartItem = cartItems.find(
            (cartItem) => cartItem.menu_id === item.menu_id
        );
        return {
            id: item.menu_id, // Use menu_id as the id
            title: item.name,
            description: item.description,
            price: item.price,
            imageSrc: item.image_path, // Use image_path as the imageSrc
            quantity: cartItem ? cartItem.quantity : 0,
        };
    });

    const cartItemsWithQuantity = cartItemsData.filter(
        (item) => item.quantity > 0
    );

    return (
        <>
            <RestaurantLayout restaurant={restaurant}>
                <h1>Restaurant Menu</h1>
                <div className="flex justify-center">
                    <div className="flex flex-col">
                        {menuItems.map((item) => (
                            <MenuCard
                                key={item.menu_id}
                                itemId={item.menu_id}
                                title={item.name}
                                description={item.description}
                                price={item.price}
                                imageSrc={item.image_path}
                                quantity={
                                    cartItemsData.find(
                                        (cartItem) =>
                                            cartItem.id === item.menu_id
                                    )?.quantity || 0
                                }
                                onQuantityChange={handleQuantityChange}
                            />
                        ))}
                    </div>
                </div>
            </RestaurantLayout>
            <div className="flex justify-center mt-4">
                <h2>Cart</h2>
            </div>
            <div className="flex justify-center">
                {cartItemsWithQuantity.length > 0 ? (
                    <Cart
                        user={auth.user}
                        restaurant={restaurant}
                        items={cartItemsWithQuantity}
                    />
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
        </>
    );
}
