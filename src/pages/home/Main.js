import React from 'react';
import { BsArrowRight, BsPiggyBank, BsStopwatch, BsCardChecklist } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import LandingPageHeaderSlider from './headerSliderSection/LandingPageHeaderSlider';
import DealsOfTheDay from './DealsOfTheDaySlider/DealsOfTheDay';
import ElectronicsAsideSectionSlider from './ElectronicsAsideSliderSection/ElectronicsAsideSectionSlider';
import FeaturedBrandSlider from './featuredBrandsSlider/FeaturedBrandSlider';

const Main = () => {
    return (
        <section className="py-3" style={{ backgroundColor: "#F6F6F6" }}>
            <div className="max-w-6xl mx-auto">


                {/* header slider section start here =====================>*/}

                <section className="grid grid-cols-1 lg:grid-cols-7 gap-4 px-3 lg:px-0">
                    <div className="lg:col-span-5">
                        <LandingPageHeaderSlider />
                    </div>
                    <div className="lg:col-span-2">
                        <aside>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">

                                <div className="bg-[url('https://bazaar.ui-lib.com/assets/images/banners/banner-17.jpg')] bg-cover bg-no-repeat bg-bottom px-7 py-11">
                                    <div>
                                        <h2 className="text-sm">NEW  ARRIVALS</h2>
                                        <h3 className="text-lg font-bold mt-1">SUMMER <br />
                                            SALE 20% OFF</h3>
                                    </div>
                                    <button className="flex items-center text-sm mt-5">Shop Now <BsArrowRight style={{ marginLeft: "7px" }} /></button>
                                </div>

                                <div className="bg-[url('https://bazaar.ui-lib.com/assets/images/banners/banner-16.jpg')] bg-cover bg-no-repeat bg-bottom px-7 py-11">
                                    <div>
                                        <h2 className="text-sm">GAMING 4K</h2>
                                        <h3 className="text-lg font-bold mt-1">DESKTOPS & <br />
                                            LAPTOPS</h3>
                                    </div>
                                    <button className="flex items-center text-sm mt-5">Shop Now <BsArrowRight style={{ marginLeft: "7px" }} /></button>
                                </div>

                            </div>
                        </aside>
                    </div>
                </section>

                {/* header slider section end here ===================>*/}

                {/* fun fact section start here ===================>*/}

                <section className="bg-white mt-8 mb-14 p-7">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <dir>
                            <div className="flex items-center lg:justify-center md:border-r">
                                <div>
                                    <TbTruckDelivery style={{ fontSize: "36px", marginRight: "10px" }} />
                                </div>
                                <div>
                                    <h5 className="text-base leading-4">Fast Delivery</h5>
                                    <p className="text-sm leading-4"><small>Start from $10</small></p>
                                </div>
                            </div>
                        </dir>
                        <dir>
                            <div className="flex items-center lg:justify-center lg:border-r">
                                <div>
                                    <BsPiggyBank style={{ fontSize: "36px", marginRight: "10px" }} />
                                </div>
                                <div>
                                    <h5 className="text-base leading-4">Money Guarantee</h5>
                                    <p className="text-sm leading-4"><small>7 days back</small></p>
                                </div>
                            </div>
                        </dir>
                        <dir>
                            <div className="flex items-center lg:justify-center md:border-r">
                                <div>
                                    <BsStopwatch style={{ fontSize: "36px", marginRight: "10px" }} />
                                </div>
                                <div>
                                    <h5 className="text-base leading-4">365 Days</h5>
                                    <p className="text-sm leading-4"><small>For free return</small></p>
                                </div>
                            </div>
                        </dir>
                        <dir>
                            <div className="flex items-center lg:justify-center">
                                <div>
                                    <BsCardChecklist style={{ fontSize: "36px", marginRight: "10px" }} />
                                </div>
                                <div>
                                    <h5 className="text-base leading-4">Payment</h5>
                                    <p className="text-sm leading-4"><small> secure System</small></p>
                                </div>
                            </div>
                        </dir>
                    </div>
                </section>

                {/* fun fact section end here ===================>*/}

                {/* product category section start here ===================>*/}
                <section className="my-16">

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 px-3 lg:px-0">
                        <div className="bg-white relative">
                            <div className="flex items-center justify-center">
                                <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-1.jpg&w=1920&q=75" alt="categories_product" />
                            </div>
                            <button className="bg-slate-50 w-full text-black hover:bg-black hover:text-white absolute bottom-0 right-0 left-0 font-bold text-sm p-2">Toys</button>
                        </div>

                        <div className="bg-white relative">
                            <div className="flex items-center justify-center">
                                <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-2.jpg&w=1920&q=75" alt="categories_product" />
                            </div>
                            <button className="bg-slate-50 w-full text-black hover:bg-black hover:text-white absolute bottom-0 right-0 left-0 font-bold text-sm p-2">Sports</button>
                        </div>

                        <div className="bg-white relative">
                            <div className="flex items-center justify-center">
                                <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-3.jpg&w=1920&q=75" alt="categories_product" />
                            </div>
                            <button className="bg-slate-50 w-full text-black hover:bg-black hover:text-white absolute bottom-0 right-0 left-0 font-bold text-sm p-2">Gaming</button>
                        </div>

                        <div className="bg-white relative">
                            <div className="flex items-center justify-center">
                                <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-4.jpg&w=1920&q=75" alt="categories_product" />
                            </div>
                            <button className="bg-slate-50 w-full text-black hover:bg-black hover:text-white absolute bottom-0 right-0 left-0 font-bold text-sm p-2">Furniture</button>
                        </div>

                        <div className="bg-white relative">
                            <div className="flex items-center justify-center">
                                <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-5.jpg&w=1920&q=75" alt="categories_product" />
                            </div>
                            <button className="bg-slate-50 w-full text-black hover:bg-black hover:text-white absolute bottom-0 right-0 left-0 font-bold text-sm p-2">Fashion</button>
                        </div>

                        <div className="bg-white relative">
                            <div className="flex items-center justify-center">
                                <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-6.jpg&w=1920&q=75" alt="categories_product" />
                            </div>
                            <button className="bg-slate-50 w-full text-black hover:bg-black hover:text-white absolute bottom-0 right-0 left-0 font-bold text-sm p-2">Cameras</button>
                        </div>
                    </div>
                </section>
                {/* product category section end here ===================>*/}


                {/* black friday sale banner section start here====================> */}
                <section className="pb-16">
                    <div
                        style={{
                            background: "#434343"
                        }}
                    >
                        <div>
                            <div className="grid md:grid-cols-6">
                                <div
                                    className="col-span-1 md:col-span-2 p-5 flex items-center " style={{
                                        background: "#E0E0E0",
                                    }}>
                                    <h2 className="text-3xl font-bold">BLACK FRIDAY SALE!</h2>
                                </div>
                                <div className="col-span-1 md:col-span-4 p-1">
                                    <div className="border border-dotted  p-5 flex items-center justify-between gap-3 w-full">
                                        <div>
                                            <marquee behavior="scroll" direction="left">
                                                <p className="text-2xl text-white  italic">PAY ONLY FOR <span className="font-bold">YOUR LOVING ELECTRONICS</span>
                                                </p>
                                            </marquee>
                                        </div>
                                        <div style={{ background: "#E0E0E0" }}>
                                            <button className="bg-black text-white px-5 py-2">Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* black friday sale banner section end here====================> */}


                {/* deals of the day section start here====================> */}


                <section className="mb-16">
                    <h1 className="text-lg font-bold">Deals Of The Day</h1>
                    <div>
                        <DealsOfTheDay />
                    </div>
                </section>

                {/* deals of the day section end here====================> */}



                {/* three card banner section start here====================> */}

                <section className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-3 lg:px-0">

                        <div className="bg-[url('https://bazaar.ui-lib.com/assets/images/banners/banner-18.jpg')] bg-no-repeat bg-cover bg-right lg:px-7 lg:py-5 py-28 px-14">
                            <div>
                                <h2 className="mb-4 text-lg lg:text-sm">NEW ARRIVALS</h2>
                                <div>
                                    <h3 className="text-xl font-bold">SKI CLOTHES SALE</h3>
                                    <h3 className="text-xl text-red-500">Up to 35% Off</h3>
                                </div>
                                <button className="flex items-center border-b border-b-2 hover:border-b-2 hover:border-black transition delay-200 mt-5">Shop Now <HiOutlineArrowSmRight className="ml-3" /></button>
                            </div>
                        </div>

                        <div className="bg-[url('https://bazaar.ui-lib.com/assets/images/banners/banner-19.jpg')] bg-no-repeat bg-cover bg-right lg:px-7 lg:py-5 py-28 px-14 text-white">
                            <div>
                                <h2 className="mb-4 text-lg lg:text-sm">BEST SELLER</h2>
                                <div>
                                    <h3 className="text-xl font-bold">TRENDING WOMEN</h3>
                                    <h3 className="text-xl">SUNGLASSES</h3>
                                </div>
                                <button className="flex items-center border-b border-black border-b-2 hover:border-b-2 hover:border-white transition delay-200 mt-5">Shop Now <HiOutlineArrowSmRight className="ml-3" /></button>
                            </div>
                        </div>

                        <div className="bg-[url('https://bazaar.ui-lib.com/assets/images/banners/banner-20.jpg')] bg-no-repeat bg-cover bg-right lg:px-7 lg:py-5 py-28 px-14">
                            <div>
                                <h2 className="mb-4 text-lg lg:text-sm">NEW ARRIVALS</h2>
                                <div>
                                    <h3 className="text-xl font-bold">NEW LATEST BAG</h3>
                                    <h3 className="text-xl">COLLECTION</h3>
                                </div>
                                <button className="flex items-center border-b border-b-2 hover:border-b-2 hover:border-black transition delay-200 mt-5">Shop Now <HiOutlineArrowSmRight className="ml-3" /></button>
                            </div>
                        </div>

                    </div>
                </section>


                {/* electronic aside slider section end here====================> */}

                <section className="px-3 lg:px-0 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded px-7 py-5">
                                <h2 className="text-2xl font-bold mb-4">Electronic</h2>
                                <div>
                                    <ul>
                                        <li className="mb-2"><a href=""><small>Wireless Speaker</small></a></li>
                                        <li className="mb-2"><a href=""><small>Tablet</small></a></li>
                                        <li className="mb-2"><a href=""><small>Smartphone</small></a></li>
                                        <li className="mb-2"><a href=""><small>Laptop</small> </a></li>
                                        <li className="mb-2"><a href=""><small>iMac</small></a></li>
                                        <li className="mb-2"><a href=""><small>Game Controller</small> </a></li>
                                        <li className="mb-2"><a href=""><small>Drone</small></a></li>
                                        <li className="mb-2"><a href=""><small>Apple</small></a></li>
                                    </ul>
                                    <button className="flex items-center border-b border-b-2 hover:border-b-2 hover:border-black transition delay-200 mt-5 text-base">Browse All <HiOutlineArrowSmRight className="ml-3" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5">
                            <div>
                                <ElectronicsAsideSectionSlider />
                            </div>
                        </div>
                    </div>
                </section>

                {/* electronic aside slider section end here====================> */}


                {/* clock two banner section start here====================> */}
                <section className="px-3 lg:px-0 mb-16">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="p-7 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKBm-sqIDZxNJX9E4sNV0U3I3Wx6EW6bXFQ&usqp=CAU')] bg-no-repeat bg-cover bg-right rounded">
                            <div>
                                <h2 className="text-lg">Final Reduction</h2>
                                <h1 className="text-2xl font-bold">Sale up to 20% off</h1>
                                <div className="border-b-2 border-black w-20 mt-3 mb-2"></div>
                                <p>Only From <span className="text-xl font-bold text-red-500">$270.00</span></p>
                            </div>
                        </div>

                        <div className="p-7 bg-[url('https://rare-gallery.com/thumbs/1070535-black-monochrome-simple-background-abstract-texture-atmosphere-gray-fog-weather-line-atmospheric-phenomenon-black-and-white-monochrome-photography.jpg')] bg-no-repeat bg-cover bg-right rounded">
                            <div className="text-white">
                                <h2 className="text-lg">Weekend Sale</h2>
                                <h1 className="text-2xl font-bold">Fine Smart Speaker</h1>
                                <div className="border-b-2 border-black w-20 mt-3 mb-2"></div>
                                <p>Starting at <span className="text-xl font-bold text-red-500">$185.00</span></p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* clock two banner section end here====================> */}


                {/* Man's Fashion aside slider section start here====================> */}

                <section className="px-3 lg:px-0 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded px-7 py-5">
                                <h2 className="text-2xl font-bold mb-4">{`Men's Fashion`}</h2>
                                <div>
                                    <ul>
                                        <li className="mb-2"><a href=""><small>Wireless Speaker</small></a></li>
                                        <li className="mb-2"><a href=""><small>Tablet</small></a></li>
                                        <li className="mb-2"><a href=""><small>Smartphone</small></a></li>
                                        <li className="mb-2"><a href=""><small>Laptop</small> </a></li>
                                        <li className="mb-2"><a href=""><small>iMac</small></a></li>
                                        <li className="mb-2"><a href=""><small>Game Controller</small> </a></li>
                                        <li className="mb-2"><a href=""><small>Drone</small></a></li>
                                        <li className="mb-2"><a href=""><small>Apple</small></a></li>
                                    </ul>
                                    <button className="flex items-center border-b border-b-2 hover:border-b-2 hover:border-black transition delay-200 mt-5 text-base">Browse All <HiOutlineArrowSmRight className="ml-3" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5">
                            <div>
                                <ElectronicsAsideSectionSlider />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mans Fashion aside slider section start here====================> */}



                {/* gift 50% off banner section start here====================> */}


                <section className="px-3 lg:px-0 mb-16">
                    <div className="px-7 py-10 bg-[url('https://rare-gallery.com/thumbs/1070535-black-monochrome-simple-background-abstract-texture-atmosphere-gray-fog-weather-line-atmospheric-phenomenon-black-and-white-monochrome-photography.jpg')] bg-no-repeat bg-cover bg-right rounded">
                        <div className="flex items-center justify-center md:justify-end">
                            <div className="md:flex items-center gap-5 md:gap-10">
                                <div>
                                    <h2 className="text-3xl font-bold">GIFT <span className="text-red-500">50% OFF</span> PERFECT STYLES</h2>
                                    <p className="text-sm">Only until the end of this week. Terms and conditions apply</p>
                                </div>
                                <button className="px-9 py-3 bg-white text-black text-sm">Discover Now</button>
                            </div>
                        </div>
                    </div>
                </section>


                {/* gift 50% off banner section start here====================> */}


                {/* women's Fashion aside slider section start here====================> */}

                <section className="px-3 lg:px-0 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded px-7 py-5">
                                <h2 className="text-2xl font-bold mb-4">{`Women's Fashion`}</h2>
                                <div>
                                    <ul>
                                        <li className="mb-2"><a href=""><small>Wireless Speaker</small></a></li>
                                        <li className="mb-2"><a href=""><small>Tablet</small></a></li>
                                        <li className="mb-2"><a href=""><small>Smartphone</small></a></li>
                                        <li className="mb-2"><a href=""><small>Laptop</small> </a></li>
                                        <li className="mb-2"><a href=""><small>iMac</small></a></li>
                                        <li className="mb-2"><a href=""><small>Game Controller</small> </a></li>
                                        <li className="mb-2"><a href=""><small>Drone</small></a></li>
                                        <li className="mb-2"><a href=""><small>Apple</small></a></li>
                                    </ul>
                                    <button className="flex items-center border-b border-b-2 hover:border-b-2 hover:border-black transition delay-200 mt-5 text-base">Browse All <HiOutlineArrowSmRight className="ml-3" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5">
                            <div>
                                <ElectronicsAsideSectionSlider />
                            </div>
                        </div>
                    </div>
                </section>

                {/*  Featured Brands section start here====================> */}

                <section className="px-3 lg:px-0 mb-16">
                    <h2 className="mb-5 text-xl font-bold">Featured Brands</h2>
                    <div className="bg-white">
                        <FeaturedBrandSlider />
                    </div>
                </section>

                {/*  Featured Brands section start here====================> */}



            </div >
        </section >
    );
};

export default Main;