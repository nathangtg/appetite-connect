import { useState } from "react";
import MenuCard from "@/Components/MenuCard";
import RestaurantLayout from "@/Layouts/RestaurantLayout";
import Cart from "@/Components/Cart";

export default function RestaurantMenu() {
    const menuItems = [
        {
            id: 1,
            title: "Red Velvet Cake",
            description: "Decadent red velvet cake with cream cheese frosting.",
            price: 15.59,
            imageSrc:
                "https://handletheheat.com/wp-content/uploads/2013/04/red-velvet-cake-recipe-SQUARE.jpg",
        },
        {
            id: 2,
            title: "Classic Cheeseburger",
            description:
                "Juicy beef patty topped with melted cheese, lettuce, tomato, and pickles, served on a sesame seed bun.",
            price: 12.99,
            imageSrc: "https://example.com/cheeseburger.jpg",
        },
        {
            id: 3,
            title: "Margherita Pizza",
            description:
                "Traditional Italian pizza topped with tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.",
            price: 17.99,
            imageSrc: "https://example.com/margherita-pizza.jpg",
        },
        {
            id: 4,
            title: "Chicken Caesar Salad",
            description:
                "Crisp romaine lettuce topped with grilled chicken breast, Parmesan cheese, croutons, and Caesar dressing.",
            price: 14.99,
            imageSrc: "https://example.com/caesar-salad.jpg",
        },
        {
            id: 5,
            title: "Spaghetti Carbonara",
            description:
                "Classic Italian pasta dish made with spaghetti, pancetta, eggs, Parmesan cheese, and black pepper.",
            price: 16.99,
            imageSrc: "https://example.com/spaghetti-carbonara.jpg",
        },
    ];

    const [cartItems, setCartItems] = useState([]);

    const handleQuantityChange = (itemId, quantity) => {
        console.log(quantity, itemId);
        const existingItem = cartItems.find((item) => item.id === itemId);

        if (existingItem) {
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === itemId ? { ...item, quantity } : item
                )
            );
        } else if (quantity > 0) {
            const newItem = menuItems.find((item) => item.id === itemId);
            if (newItem) {
                setCartItems((prevItems) => [
                    ...prevItems,
                    { ...newItem, quantity: quantity },
                ]);
            }
        } else {
        }
    };

    return (
        <>
            <RestaurantLayout>
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
