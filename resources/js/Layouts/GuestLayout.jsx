import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    return (
        <div
            className={`min-h-screen h-full flex flex-col ${
                isTablet || isMobile ? "bg-enochPic" : "bg-gray-100"
            }`}
        >
            <div className="flex flex-col md:flex-row justify-center items-center">
                {/* CONTENTS SECTION */}
                <div
                    className={`w-full md:w-1/2 h-full flex flex-col justify-center items-center py-8 px-4 ${
                        isMobile || isTablet
                            ? "backdrop-blur-md bg-transparent"
                            : ""
                    }`}
                >
                    <Link className="text-red-600 font-bold mb-4" href="/">
                        <ApplicationLogo className="w-28 h-28 fill-current" />
                    </Link>
                    <div className="w-full max-w-md border border-red-500 shadow-md rounded-lg md:p-12 p-4">
                        {children}
                    </div>
                </div>

                {/* IMAGE SECTION */}
                {!isMobile && !isTablet && (
                    <div className="hidden md:block w-1/2 h-full">
                        <img
                            className="object-cover w-full h-full"
                            src="https://i.ibb.co/kXmC14P/ENOCHPIC.jpg"
                            alt="ENOCHPIC"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
