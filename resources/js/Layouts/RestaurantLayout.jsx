import { Head } from "@inertiajs/react";

export default function RestaurantLayout({ children, restaurant }) {
    // Destructure restaurant data
    const { name, backgroundImageUrl } = restaurant;

    return (
        <>
            <Head title={name || "Restaurant"} />
            <div className="flex-col">
                <div
                    className="flex justify-center text-center h-48 relative"
                    style={{
                        backgroundImage: `url(${
                            backgroundImageUrl ||
                            "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 backdrop-blur-sm"></div>
                    <h1 className="text-3xl font-semibold self-center relative z-10">
                        {name || "Loading..."}
                    </h1>
                </div>

                {children}
            </div>
        </>
    );
}
