import { useState } from "react";

export default function MenuCard({
    itemId,
    title,
    description,
    price,
    imageSrc,
    onQuantityChange,
}) {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onQuantityChange(itemId, newQuantity); // Pass itemId and newQuantity to the parent component
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange(itemId, newQuantity); // Pass itemId and newQuantity to the parent component
        }
    };

    return (
        <div className="flex flex-row md:flex-row items-start w-full h-auto md:w-[34rem] md:h-42 sm:w-5 sm:h-auto sm:py-8 border md:px-2 my-6">
            {/* Menu Title and Price */}
            <div className="flex flex-col flex-grow mb-1 md:mb-0 md:mr-2">
                <div className="mb-2 md:pr-4 mr-2 md:w-96 sm:w-72 h-32">
                    <p className="font-bold m-0">{title}</p>
                    <p className="mt-1 text-sm md:text-base">{description}</p>
                </div>

                <div className="mb-2 flex items-center">
                    <p className="text-lg font-semibold mr-2">{price}</p>
                    <div className="flex items-center self-end pl-6">
                        <button
                            onClick={handleDecrement}
                            className="border rounded-l-md px-3 py-1"
                        >
                            -
                        </button>
                        <p className="border-t border-b px-3 py-1">
                            {quantity}
                        </p>
                        <button
                            onClick={handleIncrement}
                            className="border rounded-r-md px-3 py-1"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Thumbnail */}
            <img
                src={imageSrc}
                alt={title}
                className="md:w-32 md:h-full w-32 h-32 object-fit contain rounded-md self-center"
            />
        </div>
    );
}
