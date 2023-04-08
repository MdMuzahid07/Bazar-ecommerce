import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { BiCategory } from 'react-icons/bi';
import { AiOutlineGift } from 'react-icons/ai';
import { GiAmpleDress, GiLargeDress, GiLaptop, GiDutchBike, GiFlowerPot, GiOldMicrophone, GiHealthPotion, GiCat, GiBearFace, GiFoodTruck, GiGearHammer } from 'react-icons/gi';
import Fashion from './subcategories/Fashion/Fashion';
import Electronics from './subcategories/Electronics/Electronics';
import Bikes from './subcategories/Bikes/Bikes';
import HomeAndGarden from './subcategories/homeAndGarden/HomeAndGarden';

const CategoriesDropdown = ({ children }) => {
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
                        <span className="text-sm">{children}</span>
                    </span>
                    <IoIosArrowForward />
                </button>
                {isOpen && (
                    <div
                        style={{ width: "215px" }}
                        className="absolute right-0 mt-2 rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    >
                        <div className="py-3 relative" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">

                            {/* this is a component with sub categories mega menu */}
                            <Fashion />
                            {/* this is a component with sub categories mega menu */}

                            {/* this is a component with sub categories mega menu */}
                            <Electronics />
                            {/* this is a component with sub categories mega menu */}

                            {/* this is a component with sub categories mega menu */}
                            <Bikes />
                            {/* this is a component with sub categories mega menu */}


                            {/* this is a component with sub categories mega menu */}
                            <HomeAndGarden />
                            {/* this is a component with sub categories mega menu */}

                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex" role="menuitem">
                                <AiOutlineGift style={{ fontSize: "20px", marginRight: "7px" }} /> Gifts
                            </a>

                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex" role="menuitem">
                                <GiOldMicrophone style={{ fontSize: "20px", marginRight: "7px" }} /> Musics
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex" role="menuitem">
                                <GiHealthPotion style={{ fontSize: "20px", marginRight: "7px" }} /> Health & Beauty
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex" role="menuitem">
                                <GiCat style={{ fontSize: "20px", marginRight: "7px" }} /> Pets
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex" role="menuitem">
                                <GiBearFace style={{ fontSize: "20px", marginRight: "7px" }} /> Baby Toys
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex" role="menuitem">
                                <GiFoodTruck style={{ fontSize: "20px", marginRight: "7px" }} /> Groceries
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex" role="menuitem">
                                <GiGearHammer style={{ fontSize: "20px", marginRight: "7px" }} /> Automotive
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CategoriesDropdown;