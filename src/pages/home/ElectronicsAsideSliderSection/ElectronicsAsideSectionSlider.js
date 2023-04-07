import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import SliderSlideCard from './SliderSlideCard';

const ElectronicsAsideSectionSlider = () => {
    return (
        <section className="px-3 lg:px-0">
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
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >

                {/* this card have a css file, called SliderProductCard.module.css */}
                <SwiperSlide>
                    <SliderSlideCard />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderSlideCard />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderSlideCard />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderSlideCard />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderSlideCard />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderSlideCard />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderSlideCard />
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default ElectronicsAsideSectionSlider;