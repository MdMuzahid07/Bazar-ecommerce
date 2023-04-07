import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const FeaturedBrandSlider = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-5 py-1 md:p-10">
                <div className="mx-3 lg:mx-0">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            300: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                            <img className="w-28 filter grayscale" src="https://bazaar.ui-lib.com/assets/images/brands/alibaba.png" alt="brand_logo" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="w-28 filter grayscale" src="https://bazaar.ui-lib.com/assets/images/brands/levis.png" alt="brand_logo" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="w-28 filter grayscale" src="https://bazaar.ui-lib.com/assets/images/brands/lotto.png" alt="brand_logo" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="w-28 filter grayscale" src="https://bazaar.ui-lib.com/assets/images/brands/raymond.png" alt="brand_logo" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="w-28 filter grayscale" src="https://bazaar.ui-lib.com/assets/images/brands/samsung.png" alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="w-28" src="https://bazaar.ui-lib.com/assets/images/brands/samsung.png" alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className="w-28" src="https://bazaar.ui-lib.com/assets/images/brands/samsung.png" alt="" />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBrandSlider;