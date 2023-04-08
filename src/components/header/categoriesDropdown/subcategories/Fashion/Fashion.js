import React, { useState } from 'react';
import { GiLargeDress } from 'react-icons/gi';

const Fashion = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div>
            <div className="relative">
                <button
                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                >
                    <GiLargeDress style={{ fontSize: "20px", marginRight: "7px" }} /> Fashions
                </button>
                {showDropdown && (
                    <div className="absolute left-56 top-0 py-2 w-48 bg-white rounded-md shadow-xl z-10">
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Dropdown item 1</a>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Dropdown item 2</a>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Dropdown item 3</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Fashion;