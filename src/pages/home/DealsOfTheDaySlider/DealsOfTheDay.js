import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const DealsOfTheDay = () => {
    return (
        <section className="mt-5">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquid!
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquid!
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquid!
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquid!
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquid!
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquid!
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquid!
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquid!
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquid!
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquid!
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default DealsOfTheDay;