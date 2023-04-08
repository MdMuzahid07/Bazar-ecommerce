import React, { useState } from 'react';
import { GiLargeDress } from 'react-icons/gi';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Fashion = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div>
            <div className="relative">
                <button
                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                >
                    <GiLargeDress style={{ fontSize: "20px", marginRight: "7px" }} /> Fashions <MdKeyboardArrowRight className="absolute right-3" />
                </button>
                {showDropdown && (
                    <div className="absolute left-56 top-0 py-2 w-96 bg-white rounded-md shadow-xl z-10">
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">sub categories</a>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">sub categories</a>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">sub categories</a>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">sub categories</a>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">sub categories</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Fashion;