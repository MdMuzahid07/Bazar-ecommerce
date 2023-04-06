import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const LandingPageHeaderSlider = () => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="rounded bg-gradient-to-r from-yellow-50 p-10 sm:p-20 md:p-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                            <div>
                                <div>
                                    <h1 className="text-xl md:text-2xl mb-2">LIFESTYLE COLLECTION</h1>
                                    <h2 className="text-2xl md:text-5xl font-bold mb-2">MEN</h2>
                                    <h2 className="text-xl   md:text-3xl mb-2">Sale UP TO <span className="text-red-500">30% OFF</span></h2>
                                    <h3 className="text-base mb-10">Get Free Shipping On Orders Over $99.00</h3>
                                </div>
                                <button className="px-7 py-2 bg-black text-white text-sm font-bold">Shop Now</button>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="rounded bg-gradient-to-r from-yellow-50 p-10 sm:p-20 md:p-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                            <div>
                                <div>
                                    <h1 className="text-xl md:text-2xl mb-2">LIFESTYLE COLLECTION</h1>
                                    <h2 className="text-2xl md:text-5xl font-bold mb-2">MEN</h2>
                                    <h2 className="text-xl   md:text-3xl mb-2">Sale UP TO <span className="text-red-500">30% OFF</span></h2>
                                    <h3 className="text-base mb-10">Get Free Shipping On Orders Over $99.00</h3>
                                </div>
                                <button className="px-7 py-2 bg-black text-white text-sm font-bold">Shop Now</button>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="rounded bg-gradient-to-r from-yellow-50 p-10 sm:p-20 md:p-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                            <div>
                                <div>
                                    <h1 className="text-xl md:text-2xl mb-2">LIFESTYLE COLLECTION</h1>
                                    <h2 className="text-2xl md:text-5xl font-bold mb-2">MEN</h2>
                                    <h2 className="text-xl   md:text-3xl mb-2">Sale UP TO <span className="text-red-500">30% OFF</span></h2>
                                    <h3 className="text-base mb-10">Get Free Shipping On Orders Over $99.00</h3>
                                </div>
                                <button className="px-7 py-2 bg-black text-white text-sm font-bold">Shop Now</button>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default LandingPageHeaderSlider;