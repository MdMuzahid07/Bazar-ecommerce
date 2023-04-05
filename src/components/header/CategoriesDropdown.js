import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { BiCategory } from 'react-icons/bi';

const CategoriesDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section>
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-between items-center w-full h-9 p-3 bg-slate-50 border-none rounded"
                >
                    <span className="flex items-center gap-2">
                        <BiCategory />
                        <span className="text-sm">Categories</span>
                    </span>
                    <IoIosArrowForward />
                </button>
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Products</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Orders</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CategoriesDropdown;