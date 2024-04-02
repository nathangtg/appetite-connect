import React from "react";
import { Link } from "@inertiajs/react";

function RestaurantCard({ restaurant }) {
    return (
        <Link href={`/homepage/${restaurant.restaurant_id}/menu`}>
            <div className="card w-52 md:h-32 lg:h-72 bg-base-100 pb-6 shadow-xl border rounded-md flex flex-col justify-between hover:transform hover:scale-105 transition-transform duration-300">
                <div>
                    <img
                        src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
                        alt="restaurant"
                        className="w-full h-32 object-cover rounded-t-md"
                    />
                    <h1 className="text-1xl px-3 font-bold pt-2">
                        {restaurant.name}
                    </h1>
                    <p className="mx-3 text-xs max-h-[40px] h-[30px] overflow-hidden overflow-ellipsis whitespace-pre-line line-clamp-2">
                        {restaurant.description}
                    </p>
                    <div className="flex flex-col px-3 py-3">
                        <div className="flex py-0.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18px"
                                height="18px"
                                fill="#ff0000"
                                viewBox="0 0 24 24"
                            >
                                <g>
                                    <g>
                                        <path
                                            d="M11.41,12.462c0.08-0.241,0.193-0.445,0.341-0.598c0.148-0.153,0.327-0.291,0.535-0.417
                        c0.134-0.085,0.255-0.18,0.363-0.285c0.107-0.106,0.193-0.226,0.255-0.363c0.062-0.136,0.095-0.288,0.095-0.454
                        c0-0.199-0.047-0.372-0.142-0.518c-0.094-0.146-0.218-0.258-0.374-0.338c-0.156-0.079-0.329-0.119-0.519-0.119
                        c-0.173,0-0.337,0.036-0.495,0.107c-0.157,0.072-0.287,0.183-0.389,0.335c-0.046,0.067-0.083,0.141-0.111,0.224
                        c-0.072,0.21-0.261,0.359-0.483,0.359h0c-0.349,0-0.601-0.348-0.479-0.675c0.047-0.125,0.106-0.241,0.179-0.348
                        c0.188-0.279,0.437-0.491,0.748-0.634c0.311-0.143,0.654-0.216,1.031-0.216c0.411,0,0.773,0.077,1.082,0.231
                        c0.31,0.154,0.55,0.367,0.721,0.642c0.172,0.274,0.258,0.595,0.258,0.96c0,0.251-0.039,0.477-0.118,0.678
                        s-0.19,0.379-0.334,0.536c-0.144,0.157-0.318,0.296-0.52,0.417c-0.191,0.119-0.344,0.242-0.462,0.37s-0.207,0.278-0.257,0.454
                        c-0.015,0.053-0.031,0.164-0.045,0.283c-0.029,0.245-0.236,0.429-0.482,0.429h0c-0.286,0-0.512-0.246-0.484-0.531
                        C11.343,12.789,11.371,12.58,11.41,12.462z"
                                        />
                                        <circle
                                            cx="11.792"
                                            cy="14.894"
                                            r="0.587"
                                        />
                                    </g>
                                    <path
                                        d="M12,21.933c-5.477,0-9.933-4.456-9.933-9.934c0-5.477,4.456-9.933,9.933-9.933
                    S21.933,6.523,21.933,12C21.933,17.477,17.477,21.933,12,21.933z M12,3.067c-4.926,0-8.933,4.007-8.933,8.933
                    S7.074,20.933,12,20.933s8.933-4.008,8.933-8.934S16.926,3.067,12,3.067z"
                                    />
                                </g>
                            </svg>
                            <p className="ml-2 overflow-hidden overflow-ellipsis max-w-[120px] whitespace-nowrap text-sm">
                                {restaurant.cuisine}
                            </p>
                        </div>
                        <div className="flex py-0.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18px"
                                height="18px"
                                fill="#ff0000"
                                viewBox="0 0 24 24"
                            >
                                <g>
                                    <path
                                        d="M12,21.933c-5.477,0-9.933-4.456-9.933-9.933c0-5.478,4.456-9.934,9.933-9.934
                    S21.933,6.523,21.933,12C21.933,17.477,17.477,21.933,12,21.933z M12,3.067c-4.926,0-8.933,4.008-8.933,8.934
                    S7.074,20.933,12,20.933s8.933-4.007,8.933-8.933S16.926,3.067,12,3.067z"
                                    />
                                    <path
                                        d="M17.997,12.501h-6c-0.15,0-0.26-0.05-0.34-0.14c-0.01,0-0.01-0.01-0.02-0.02
                    c-0.09-0.08-0.14-0.19-0.14-0.34v-6c0-0.65,1-0.64,1,0v5.5h5.5C18.647,11.501,18.647,12.501,17.997,12.501z"
                                    />
                                </g>
                            </svg>
                            <p className="ml-2 overflow-hidden overflow-ellipsis max-w-[120px] whitespace-nowrap text-sm">
                                {restaurant.preparation_time}
                            </p>
                        </div>
                        <div className="flex py-0.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18px"
                                height="18px"
                                fill="#ff0000"
                                viewBox="0 0 24 24"
                            >
                                <g>
                                    <path d="M19.44,5.78H4.56a2.507,2.507,0,0,0-2.5,2.5v7.44a2.514,2.514,0,0,0,2.5,2.5H19.44a2.507,2.507,0,0,0,2.5-2.5V8.28A2.5,2.5,0,0,0,19.44,5.78ZM3.06,8.28a1.5,1.5,0,0,1,1.5-1.5H6.04A3.521,3.521,0,0,1,3.06,9.76Zm1.5,8.94a1.511,1.511,0,0,1-1.5-1.5V14.24a3.521,3.521,0,0,1,2.98,2.98Zm16.38-1.5a1.5,1.5,0,0,1-1.5,1.5H17.96a3.521,3.521,0,0,1,2.98-2.98Zm0-2.49a4.528,4.528,0,0,0-3.99,3.99H7.05a4.528,4.528,0,0,0-3.99-3.99V10.77A4.528,4.528,0,0,0,7.05,6.78h9.9a4.528,4.528,0,0,0,3.99,3.99Zm0-3.47a3.521,3.521,0,0,1-2.98-2.98h1.48a1.5,1.5,0,0,1,1.5,1.5Z" />
                                    <circle cx="12.002" cy="11.998" r="2" />
                                </g>
                            </svg>
                            <p className="ml-2 overflow-hidden overflow-ellipsis max-w-[120px] whitespace-nowrap text-sm">
                                {restaurant.price_range}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default RestaurantCard;
