import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineSearch } from 'react-icons/ai';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineShoppingBag } from 'react-icons/md';
import Image from 'next/image';
import UserAccountDropdown from './UserAccountDropdown';
import VendorAccountDropdown from './VendorAccountDropdown';
import CategoriesDropdown from './categoriesDropdown/CategoriesDropdown';


const Header = () => {
    return (
        <header>
            {/* header top start here */}
            <section className="w-full" style={{ backgroundColor: "#2B3445" }}>
                <section className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-center h-9 px-3 lg:px-0">
                        <div>
                            <p className="text-xs text-white"><span style={{ backgroundColor: "#D23F57" }} className="p-1 px-3 rounded-full font-bold mr-1">HOT</span> <span>Free Express Shipping</span></p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div>
                                <select style={{ background: "none", fontSize: "12px", color: "white" }}>
                                    <option style={{ fontSize: "12px", color: "black" }} value="option1">EN</option>
                                    <option style={{ fontSize: "12px", color: "black" }} value="option2">DE</option>
                                </select>
                            </div>
                            <div className="flex gap-2">
                                <AiOutlineTwitter style={{ color: "white" }} />
                                <RiFacebookBoxFill style={{ color: "white" }} />
                                <AiOutlineInstagram style={{ color: "white" }} />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            {/* header top end here */}
            {/* header searchbar start here */}
            <div className="bg-white">
                <section className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-5 py-5 px-3 lg:px-0">
                        <div className="col-span-1 lg:flex lg:gap-3">
                            <div className="hidden lg:block">
                                <Image
                                    src="https://bazaar.ui-lib.com/assets/images/logo2.svg" alt="brand_logo"
                                    width={85}
                                    height={50}
                                />
                            </div>
                            <div className="hidden lg:block z-50">
                                <CategoriesDropdown ></CategoriesDropdown>
                            </div>
                        </div>
                        <div className="col-span-3 sticky top-0 left-0 z-50">
                            <div className="block lg:hidden">
                                <div className="flex items-center justify-center">
                                    <Image
                                        src="https://bazaar.ui-lib.com/assets/images/logo2.svg" alt="brand_logo"
                                        width={85}
                                        height={50}
                                    />
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <div className="flex items-center relative">
                                    <AiOutlineSearch className="absolute ml-3" style={{ fontSize: "17px" }} />
                                    <input
                                        style={{ borderRadius: "5rem 0rem 0rem 5rem", width: "900px" }}
                                        className="border h-10 pl-10" type="text" placeholder="Searching for..."
                                    />
                                    <div>
                                        <select
                                            style={{ borderRadius: "0rem 5rem 5rem 0rem", borderLeft: "none", }}
                                            className="h-10 border bg-slate-50 text-sm px-5"
                                        >
                                            <option selected value="option1">All Categories</option>
                                            <option value="option1">Car</option>
                                            <option value="option2">Cloths</option>
                                            <option value="option2">Electronics</option>
                                            <option value="option2">Laptop</option>
                                            <option value="option2">Desktops</option>
                                            <option value="option2">Camera</option>
                                            <option value="option2">Toys</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cols-span-1">
                            <div className="flex justify-end lg:gap-3">
                                <div>
                                    <span className=" p-2 block lg:hidden">
                                        <AiOutlineSearch style={{ fontSize: "20px" }} />
                                    </span>
                                </div>
                                <span className="lg:bg-slate-100 rounded-full p-2">
                                    <BsPerson style={{ fontSize: "20px" }} />
                                </span>
                                <span className="lg:bg-slate-100 rounded-full p-2 relative">
                                    <span className="absolute top-0 right-0 lg:-top-2 lg:-right-2 bg-red-500 w-4 h-4 rounded-full text-xs text-white text-center">10</span>
                                    <MdOutlineShoppingBag style={{ fontSize: "20px" }} />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* header searchbar end here */}
            {/* header categories section start here */}
            <section className="bg-white hidden lg:block">
                <div className="max-w-6xl mx-auto h-11">
                    <div className="grid grid-cols-5 gap-5">
                        <div className="col-span-1">
                            {/* this component for category button dropdown */}
                            <CategoriesDropdown >Categories</CategoriesDropdown>
                        </div>
                        <div className="col-span-4 py-2 w-full">
                            <div className="flex justify-between items-center">
                                <div>
                                    <marquee>
                                        <p>25% Discount for first order, Delivery charged free for every 200$ spend</p>
                                    </marquee>
                                </div>
                                <div>
                                    <ul className="flex items-center gap-10 justify-between my-2 text-sm">
                                        <li>Home</li>
                                        <li>
                                            {/* user account nav link dropdown component */}
                                            <UserAccountDropdown />
                                        </li>
                                        <li>
                                            {/* vendor account nav link dropdown component */}
                                            <VendorAccountDropdown />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* header categories section end here */}
        </header>
    );
};

export default Header;