import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { BiMap, BiStore } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone, BsChatLeftText, BsSearch } from 'react-icons/bs';
import CategoriesProductCard from '../categories/CategoriesProductCard';
import { GrApps, GrMoreVertical, GrMenu } from "react-icons/gr";

const VendorShopPage = () => {
    // states for store main layout buttons
    const [isHome, setIsHome] = useState(true);
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
                                className="w-full h-96 object-cover mt-8 rounded-xl" src="https://previews.123rf.com/images/varijanta/varijanta1601/varijanta160100046/51310252-thin-line-flat-design-banner-of-online-shopping-e-commerce-m-commerce-modern-vector-illustration.jpg" alt="storeBanner" />
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
                    <main className="grid lg:grid-cols-6 gap-5 mt-5">
                        <aside className="lg:col-span-1">
                            <div>
                                <h1 className="text-sm mb-3">Category</h1>
                                <div>
                                    <ul>
                                        <li>
                                            <p className="text-xs mt-1 text-slate-500" >Casual Shirts</p>
                                            <p className="text-xs mt-1 text-slate-500" >Mens Shirts</p>
                                            <p className="text-xs mt-1 text-slate-500" >Mens Shirts</p>
                                            <p className="text-xs mt-1 text-slate-500" >Mens Shirts</p>
                                            <p className="text-xs mt-1 text-slate-500" >Mens Shirts</p>
                                            <p className="text-xs mt-1 text-slate-500" >Mens Shirts</p>
                                            <p className="text-xs mt-1 text-slate-500" >Mens Shirts</p>
                                        </li>
                                    </ul>
                                </div>

                                <hr className="my-5" />

                                <div>
                                    <h1 className="text-sm mb-3">Brand</h1>
                                    <div>
                                        <ul>
                                            <li className="flex items-center gap-2">
                                                <input type="checkbox" name="" id="brand" />
                                                <label htmlFor="brand" className="text-xs">Arong</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <hr className="my-5" />

                                <div>
                                    <h1 className="text-sm mb-3">Service</h1>
                                    <div>
                                        <ul>
                                            <li className="flex items-center gap-2">
                                                <input type="checkbox" name="" id="cash" />
                                                <label htmlFor="cash" className="text-xs">Cash on delivery</label>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <input type="checkbox" name="" id="free" />
                                                <label htmlFor="free" className="text-xs">Free shipping</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <hr className="my-5" />

                                <div>
                                    <h1 className="text-sm mb-3">Location</h1>
                                    <div>
                                        <ul>
                                            <li className="flex items-center gap-2">
                                                <input type="checkbox" name="" id="bangladesh" />
                                                <label htmlFor="bangladesh" className="text-xs">Bangladesh</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <hr className="my-5" />

                                <div>
                                    <h1 className="text-sm mb-3">Price</h1>
                                    <div className="flex items-center gap-2">
                                        <input className="border rounded p-1 w-full" placeholder="0" type="number" />
                                        <p>-</p>
                                        <input className="border rounded p-1 w-full" placeholder="250" type="number" />
                                    </div>
                                </div>

                                <hr className="my-5" />

                                <div>
                                    <h1 className="text-sm mb-3">Ratings</h1>
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

                                <hr className="my-5" />

                                <div>
                                    <h1 className="text-sm mb-3">Main Material</h1>
                                    <ul>
                                        <li className="flex items-center gap-2">
                                            <input type="checkbox" name="" id="bangladesh" />
                                            <label htmlFor="bangladesh" className="text-xs">Cotton</label>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <input type="checkbox" name="" id="bangladesh" />
                                            <label htmlFor="bangladesh" className="text-xs">Cotton</label>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <input type="checkbox" name="" id="bangladesh" />
                                            <label htmlFor="bangladesh" className="text-xs">Cotton</label>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <input type="checkbox" name="" id="bangladesh" />
                                            <label htmlFor="bangladesh" className="text-xs">Cotton</label>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <input type="checkbox" name="" id="bangladesh" />
                                            <label htmlFor="bangladesh" className="text-xs">Cotton</label>
                                        </li>
                                    </ul>
                                </div>


                                <hr className="my-5" />

                                <div>
                                    <h1 className="text-sm mb-3">Size</h1>
                                    <ul>
                                        <li className="flex items-center gap-2">
                                            <input type="checkbox" name="" id="bangladesh" />
                                            <label htmlFor="bangladesh" className="text-xs">Xl</label>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <input type="checkbox" name="" id="bangladesh" />
                                            <label htmlFor="bangladesh" className="text-xs">Lg</label>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <input type="checkbox" name="" id="bangladesh" />
                                            <label htmlFor="bangladesh" className="text-xs">XXL</label>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <input type="checkbox" name="" id="bangladesh" />
                                            <label htmlFor="bangladesh" className="text-xs">MD</label>
                                        </li>
                                    </ul>
                                </div>

                                <hr className="my-5" />

                                <div>
                                    <h1 className="text-sm mb-3">Color Family</h1>
                                    <ul>
                                        <li className="flex items-center gap-2">
                                            <input type="checkbox" name="" id="bangladesh" />
                                            <label htmlFor="bangladesh" className="text-xs">Black</label>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <input type="checkbox" name="" id="bangladesh" />
                                            <label htmlFor="bangladesh" className="text-xs">White</label>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <input type="checkbox" name="" id="bangladesh" />
                                            <label htmlFor="bangladesh" className="text-xs">Red</label>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <input type="checkbox" name="" id="bangladesh" />
                                            <label htmlFor="bangladesh" className="text-xs">Orange</label>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <input type="checkbox" name="" id="bangladesh" />
                                            <label htmlFor="bangladesh" className="text-xs">Yellow</label>
                                        </li>
                                    </ul>
                                </div>

                                <hr className="my-5" />

                                <div>
                                    <h1 className="text-sm mb-3">Warranty Type</h1>
                                    <ul>
                                        <li className="flex items-center gap-2">
                                            <input type="checkbox" name="" id="bangladesh" />
                                            <label htmlFor="bangladesh" className="text-xs">No Warranty</label>
                                        </li>
                                    </ul>
                                </div>

                                <hr className="my-5" />

                                <div>
                                    <h1 className="text-sm mb-3">Fit Type</h1>
                                    <ul>
                                        <li className="flex items-center gap-2">
                                            <input type="checkbox" name="" id="bangladesh" />
                                            <label htmlFor="bangladesh" className="text-xs">Slim</label>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </aside>

                        {/* home , all product, profile navbar */}
                        <div className="lg:col-span-5">
                            <header>
                                <div className="flex items-center justify-center sm:justify-between">
                                    <div>
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
                                    </div>

                                    {/* product search input  */}
                                    <div className="relative">
                                        <input className="px-5 py-1 border md:w-80" type="text" placeholder="search in store" name="" id="" />
                                        <div className="absolute right-5 top-2">
                                            < BsSearch />
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <div>
                                {/* home product profile page conditionally rendering here */}

                                {/* homepage start here ================== */}

                                {
                                    isHome && <div>

                                        <section className="mt-10">
                                            <h1 className="mb-5"><span className="font-bold text-red-500">Best</span> selling product all time</h1>
                                            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">

                                                {/* this card imported from categoriesProductCard */}

                                                <CategoriesProductCard />
                                                <CategoriesProductCard />
                                                <CategoriesProductCard />
                                                <CategoriesProductCard />
                                                <CategoriesProductCard />
                                                <CategoriesProductCard />
                                                <CategoriesProductCard />
                                                <CategoriesProductCard />

                                            </div>
                                            <div className="mt-14">
                                                <button className="border border-red-500 md:px-20 lg:px-32 p-2">Load More</button>
                                            </div>
                                        </section>

                                    </div>
                                }


                                {/* homepage end here ==================> */}


                                {/* all product page start here ================== */}

                                {
                                    isAllProducts && <div>
                                        <header className="mt-10">
                                            <div className=" flex flex-wrap items-center justify-between gap-9 ">
                                                <div className="flex flex-wrap items-center gap-4">
                                                    <div>
                                                        <p>Short by:</p>
                                                    </div>
                                                    <div>
                                                        <select
                                                            className="block px-4 py-2  rounded-md shadow-sm outline-none border w-44"
                                                        >
                                                            <option value="">Select an option</option>
                                                            <option value="option1">Option 1</option>
                                                            <option value="option2">Option 2</option>
                                                            <option value="option3">Option 3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <p>View:</p>
                                                    <div className="flex items-center gap-3">
                                                        <button><GrApps /></button>
                                                        <button className="flex"><GrMoreVertical /><GrMenu className="-ml-2" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </header>

                                        <hr className="my-5" />

                                        <main>
                                            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">

                                                {/* this card imported from CategoriesProductCard */}

                                                <CategoriesProductCard />
                                                <CategoriesProductCard />
                                                <CategoriesProductCard />
                                                <CategoriesProductCard />
                                                <CategoriesProductCard />
                                                <CategoriesProductCard />
                                                <CategoriesProductCard />
                                                <CategoriesProductCard />
                                                <CategoriesProductCard />
                                                <CategoriesProductCard />
                                                <CategoriesProductCard />
                                                <CategoriesProductCard />


                                            </div>
                                        </main>
                                        <div className="mt-14">
                                            <button className="border border-red-500 md:px-20 lg:px-32 p-2">Load More</button>
                                        </div>
                                    </div>
                                }


                                {/* all product page end here ==================> */}


                                {/* all product page start here ================== */}

                                {
                                    isProfile && <div>

                                        <section className="mt-10">

                                        </section>

                                    </div>
                                }


                                {/* all product page end here ==================> */}


                            </div>
                        </div>
                    </main>
                </section>
                {/* store main layout end here */}

            </div>

        </section>
    );
};

export default VendorShopPage;