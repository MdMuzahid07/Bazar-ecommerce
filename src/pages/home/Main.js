import React from 'react';
import { BsArrowRight, BsPiggyBank, BsStopwatch, BsCardChecklist } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
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

                {/* header slider section end here ===================>*/}

                {/* fun fact section start here ===================>*/}

                <section className="bg-white mt-8 mb-14 p-7">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <dir>
                            <div className="flex items-center justify-center md:border-r">
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
                            <div className="flex items-center justify-center md:border-r">
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
                            <div className="flex items-center justify-center lg:border-r">
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
                            <div className="flex items-center justify-center">
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


            </div>
        </section>
    );
};

export default Main;