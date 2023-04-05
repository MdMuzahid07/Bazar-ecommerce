import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const UserAccountDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section>
            <div className="relative">
                <div
                    className="flex items-center"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className=" mr-2">User Account</span> <IoIosArrowDown />
                </div>
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-44 rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Order</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Address</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Support ticket</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Wishlist</a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default UserAccountDropdown;