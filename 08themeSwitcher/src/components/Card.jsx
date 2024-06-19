import React from "react";

export default function Card() {
    return (
        <div className="w-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 flex items-center justify-center rounded-2xl" src="data:image/webp;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
