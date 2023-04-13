import React, { useState } from 'react';
import { GrLanguage } from 'react-icons/gr';

const VendorSignUpPage = () => {
    // for header language state
    const [isOpen, setIsOpen] = useState(false);


    return (
        <section>
            <header>
                <div className="bg-white w-full">
                    <div className="max-w-6xl mx-auto py-5   border">
                        <div className="flex flex-wrap justify-center md:justify-between items-center gap-5">
                            <div className="flex items-center">
                                <div>
                                    <img className="w-32" src="https://icms-image.slatic.net/images/ims-web/bfe8de2c-b737-42ab-b1f1-576042ab0412.png" alt="" />
                                </div>

                                <div className="relative inline-block text-left">
                                    <div>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center w-full  px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 "
                                            id="options-menu"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                            onClick={() => setIsOpen(!isOpen)}
                                        >
                                            <div className="flex items-center gap-2">
                                                <GrLanguage />
                                                <p><small>{`bangla`}</small></p>
                                                <img className="w-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/800px-Flag_of_Bangladesh.svg.png" alt="" />

                                                <div className="flex">
                                                    <small>{`Bangladesh`}</small>
                                                    {/* Show/hide the dropdown arrow based on whether the dropdown is open */}
                                                    <svg className={`ml-2 h-5 w-5 ${isOpen ? '-rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>

                                        </button>
                                    </div>
                                    {/* Conditionally render the dropdown menu based on whether the dropdown is open */}
                                    {isOpen && (
                                        <div className="origin-top-right absolute left-0 mt-2 w-44 z-50 bg-white border rounded">
                                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Bangladesh</a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Pakistan</a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quos nihil
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>

            </main>
            <footer>

            </footer>
        </section>
    );
};

export default VendorSignUpPage;