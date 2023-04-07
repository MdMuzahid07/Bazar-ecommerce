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
        <div style={{ backgroundColor: "#F5F5F5" }}>
            <div className="max-w-7xl mx-auto py-16">
                <div className="mx-3 lg:mx-0">
                    <h2 className="text-2xl font-bold text-center mb-10">Top Categories Of The Month</h2>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
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
                        modules={[Pagination]}
                        className="mySwiper"
                    >


                        <SwiperSlide>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi dolorum veritatis. Tempore odit minima dolores autem nostrum soluta enim?</p>
                        </SwiperSlide>

                        <SwiperSlide>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi dolorum veritatis. Tempore odit minima dolores autem nostrum soluta enim?</p>
                        </SwiperSlide>

                        <SwiperSlide>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi dolorum veritatis. Tempore odit minima dolores autem nostrum soluta enim?</p>
                        </SwiperSlide>

                        <SwiperSlide>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi dolorum veritatis. Tempore odit minima dolores autem nostrum soluta enim?</p>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBrandSlider;