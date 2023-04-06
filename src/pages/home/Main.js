import React from 'react';
import LandingPageHeaderSlider from './headerSliderSection/LandingPageHeaderSlider';

const Main = () => {
    return (
        <section className="py-3" style={{ backgroundColor: "#F6F6F6" }}>
            <div className="max-w-6xl mx-auto">


                {/* header slider section start here =====================>*/}

                <section>
                    <LandingPageHeaderSlider />
                </section>


                <section className="min-h-screen w-full">

                </section>



                {/* header slider section end here ===================>*/}

            </div>
        </section>
    );
};

export default Main;