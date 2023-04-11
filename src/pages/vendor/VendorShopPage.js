import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { BiMap, BiStore } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone, BsChatLeftText } from 'react-icons/bs';

const VendorShopPage = () => {
    // states for store main layout buttons
    const [isHome, setIsHome] = useState(false);
    const [isAllProducts, setIsAllProducts] = useState(false);
    const [isProfile, setIsProfile] = useState(false);

    // this function for store main layout header buttons ==============
    const handleHomeBtn = () => {
        setIsAllProducts(false);
        setIsProfile(false);
        setIsHome(true);
    };

    const handleAllProductsBtn = () => {
        setIsProfile(false);
        setIsHome(false);
        setIsAllProducts(true);
    };

    const handleProfilePage = () => {
        setIsHome(false);
        setIsAllProducts(false);
        setIsProfile(true);
    };

    // =====================================================!>

    return (
        <section style={{ background: "#FFFFFF" }} >
            <div className="max-w-6xl mx-auto py-10 ">

                {/* header banner and Breadcrumbs section start here */}
                <section className="mx-3 lg:mx-0">
                    <nav>
                        <ul className="flex">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
                            </li>
                            <li className="mx-2">
                                <IoIosArrowForward className="inline-block" />
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-800">Products</a>
                            </li>
                            <li className="mx-2">
                                <IoIosArrowForward className="inline-block" />
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-800">Product Name</a>
                            </li>
                        </ul>
                    </nav>

                    {/* banner area======================> */}
                    <div className="relative">
                        <div>
                            <img
                                className="w-full h-96 md:h-auto mt-8 rounded-xl" src="https://previews.123rf.com/images/varijanta/varijanta1601/varijanta160100046/51310252-thin-line-flat-design-banner-of-online-shopping-e-commerce-m-commerce-modern-vector-illustration.jpg" alt="storeBanner" />
                        </div>
                        <div style={{ background: "rgba(0, 0, 0, 0.73)" }} className="absolute left-0 bottom-0 text-white w-full rounded-b-xl px-5 py-5 sm:py-10">
                            <div className="grid sm:grid-cols-5 gap-3 relative">
                                <div className="sm:col-span-1 -mt-14 sm:-mt-20">
                                    <img className="w-16 sm:w-28  rounded-full mb-3" src="https://portotheme.com/html/wolmart/assets/images/vendor/brand/2-100x100.png" alt="" />

                                    {/* star ratings */}
                                    <div>
                                        <div className="flex items-center space-x-1 sm:mx-1">
                                            <input type="radio" name="rating" value="1" id="rating1" className="sr-only" />
                                            <label for="rating1" className="text-lg text-yellow-400 cursor-pointer">&#9733;</label>

                                            <input type="radio" name="rating" value="2" id="rating2" className="sr-only" />
                                            <label for="rating2" className="text-lg text-yellow-400 cursor-pointer">&#9733;</label>

                                            <input type="radio" name="rating" value="3" id="rating3" className="sr-only" />
                                            <label for="rating3" className="text-lg text-yellow-400 cursor-pointer">&#9733;</label>

                                            <input type="radio" name="rating" value="4" id="rating4" className="sr-only" />
                                            <label for="rating4" className="text-lg text-yellow-400 cursor-pointer">&#9733;</label>

                                            <input type="radio" name="rating" value="5" id="rating5" className="sr-only" />
                                            <label for="rating5" className="text-lg text-yellow-400 cursor-pointer">&#9733;</label>
                                        </div>


                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <h2 className="text-lg font-bold">Vendor 1</h2>

                                    <ul>
                                        <li className="flex items-center gap-2 mt-3">
                                            <BiMap />
                                            <p> Street1, Street2, Great Area, California, United States (US), 92090El Carjon,
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-2 mt-2">
                                            <BsTelephone />
                                            <p>0010791263496</p>
                                        </li>
                                        <li className="flex items-center gap-2 mt-2">
                                            <AiOutlineMail />
                                            <p>wc.vendor@gmail.com</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sm:absolute right-5 bottom-0">
                                    <div className="flex items-center gap-4">
                                        <button className="flex items-center gap-2 border hover:border-yellow-700 rounded px-2 py-1 hover:text-yellow-700 active:font-bold">
                                            <BiStore style={{ fontSize: "13px" }} /> <small>Follow</small>
                                        </button>
                                        <button className="flex items-center gap-2 border hover:border-yellow-700 rounded px-2 py-1 hover:text-yellow-700 active:font-bold">
                                            <BsChatLeftText style={{ fontSize: "13px" }} /> <small>Message</small>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* header banner and Breadcrumbs section end here */}



                {/* store main layout start here */}
                <section className="mt-10">
                    <header>
                        <ul className="flex items-center gap-5 text-sm font-bold">
                            <li
                                onClick={handleHomeBtn}
                                className={isHome ? "border-b-2 border-red-500" : "hover:border-b-2 border-red-500"}
                            >
                                <button>Home</button>
                            </li>
                            <li
                                onClick={handleAllProductsBtn}
                                className={isAllProducts ? "border-b-2 border-red-500" : "hover:border-b-2 border-red-500"}
                            >
                                <button>All Products</button>
                            </li>
                            <li
                                onClick={handleProfilePage}
                                className={isProfile ? "border-b-2 border-red-500" : "hover:border-b-2 border-red-500"}
                            >
                                <button>Profile</button>
                            </li>
                        </ul>
                    </header>
                    <main className="grid lg:grid-cols-6 gap-5 mt-5">
                        <div className="lg:col-span-1">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate itaque aliquid, dolor reiciendis quae quam eius debitis sequi ipsam natus.

                        </div>
                        <div className="lg:col-span-5">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate itaque aliquid, dolor reiciendis quae quam eius debitis sequi ipsam natus.
                        </div>
                    </main>
                </section>
                {/* store main layout end here */}


            </div>

        </section>
    );
};

export default VendorShopPage;