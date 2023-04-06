import React from 'react';
import LandingPageHeaderSlider from './headerSliderSection/LandingPageHeaderSlider';

const Main = () => {
    return (
        <section className="py-3" style={{ backgroundColor: "#F6F6F6" }}>
            <div className="max-w-6xl mx-auto">


                {/* header slider section start here =====================>*/}

                <section className="grid grid-cols-1 lg:grid-cols-7 gap-3 px-3 lg:px-0">
                    <div className="col-span-5">
                        <LandingPageHeaderSlider />
                    </div>
                    <div className="col-span-2">
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
                                <div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repudiandae.
                                </div>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repudiandae.
                                </div>
                            </div>
                        </div>
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