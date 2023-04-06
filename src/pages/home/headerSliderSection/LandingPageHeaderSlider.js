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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde numquam vero aliquid. Architecto, animi sapiente! Omnis ducimus repellendus corrupti neque ut officia quia amet voluptates mollitia, debitis, voluptate, accusantium aut.
                </SwiperSlide>
                <SwiperSlide>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde numquam vero aliquid. Architecto, animi sapiente! Omnis ducimus repellendus corrupti neque ut officia quia amet voluptates mollitia, debitis, voluptate, accusantium aut.
                </SwiperSlide>
                <SwiperSlide>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde numquam vero aliquid. Architecto, animi sapiente! Omnis ducimus repellendus corrupti neque ut officia quia amet voluptates mollitia, debitis, voluptate, accusantium aut.
                </SwiperSlide>
                <SwiperSlide>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde numquam vero aliquid. Architecto, animi sapiente! Omnis ducimus repellendus corrupti neque ut officia quia amet voluptates mollitia, debitis, voluptate, accusantium aut.
                </SwiperSlide>
                <SwiperSlide>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde numquam vero aliquid. Architecto, animi sapiente! Omnis ducimus repellendus corrupti neque ut officia quia amet voluptates mollitia, debitis, voluptate, accusantium aut.
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default LandingPageHeaderSlider;