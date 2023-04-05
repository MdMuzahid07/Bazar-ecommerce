import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { BiCategory } from 'react-icons/bi';
import { GiAmpleDress } from 'react-icons/gi';

const CategoriesDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section>
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-between items-center w-full h-9 p-3 bg-slate-100 border-none rounded"
                >
                    <span className="flex items-center gap-2">
                        <BiCategory />
                        <span className="text-sm">Categories</span>
                    </span>
                    <IoIosArrowForward />
                </button>
                {isOpen && (
                    <div
                        style={{ width: "215px" }}
                        className="absolute right-0 mt-2 rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    >
                        <div className="py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex" role="menuitem">
                                <GiAmpleDress style={{ fontSize: "20px", marginRight: "5px" }} /> hello world
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CategoriesDropdown;