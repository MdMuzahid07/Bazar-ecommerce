import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import SliderProductCard from './SliderProductCard';

const DealsOfTheDay = () => {
    return (
        <section className="mt-5 px-3 lg:px-0">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SliderProductCard />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderProductCard />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderProductCard />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderProductCard />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderProductCard />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderProductCard />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderProductCard />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default DealsOfTheDay;