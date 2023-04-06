import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import LandingPageHeaderSlider from './headerSliderSection/LandingPageHeaderSlider';

const Main = () => {
    return (
        <section className="py-3" style={{ backgroundColor: "#F6F6F6" }}>
            <div className="max-w-6xl mx-auto">


                {/* header slider section start here =====================>*/}

                <section className="grid grid-cols-1 lg:grid-cols-7 gap-4 px-3 lg:px-0">
                    <div className="col-span-5">
                        <LandingPageHeaderSlider />
                    </div>
                    <div className="col-span-2">
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


                <section className="min-h-screen w-full">

                </section>



                {/* header slider section end here ===================>*/}

            </div>
        </section>
    );
};

export default Main;