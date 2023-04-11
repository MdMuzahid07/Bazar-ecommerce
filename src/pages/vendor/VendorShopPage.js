import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const VendorShopPage = () => {
    return (
        <section style={{ background: "#FFFFFF" }} >
            <div classNameName="max-w-6xl mx-auto py-10">

                {/* header banner and Breadcrumbs section start here */}
                <section>
                    <nav>
                        <ul className="flex">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
                            </li>
                            <li className="mx-2">
                                <IoIosArrowForward classNameName="inline-block" />
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-800">Products</a>
                            </li>
                            <li className="mx-2">
                                <IoIosArrowForward classNameName="inline-block" />
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-800">Product Name</a>
                            </li>
                        </ul>
                    </nav>
                </section>

                {/* header banner and Breadcrumbs section end here */}



            </div>

        </section>
    );
};

export default VendorShopPage;