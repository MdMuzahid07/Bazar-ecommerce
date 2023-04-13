import React, { useState } from 'react';
import { GrLanguage } from 'react-icons/gr';
import { IoIosArrowForward } from 'react-icons/io';

const VendorSignUpPage = () => {
    // for header language state
    const [isOpen, setIsOpen] = useState(false);

    // input slider functionality for verification 
    const [slideInput, setSlideInput] = useState(50);

    const handleChange = (event) => {
        setSlideInput(event.target.value);
    };


    return (
        <section>

            {/* header area start here */}
            <header>
                <div className="bg-white w-full">
                    <div className="max-w-6xl mx-auto py-5">
                        <div className="flex flex-wrap justify-center md:justify-between items-center gap-5">
                            <div className="flex items-center">
                                <div>
                                    <img className="w-32" src="https://icms-image.slatic.net/images/ims-web/bfe8de2c-b737-42ab-b1f1-576042ab0412.png" alt="" />
                                </div>

                                <div className="relative inline-block text-left">
                                    <div>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center w-full  px-2 py-2 bg-white text-sm font-medium text-gray-700"
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

                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                                    <div>
                                                        <div className="relative group">
                                                            <button className="flex items-center justify-between gap-2 w-full">
                                                                <div className="flex items-center gap-2">
                                                                    <img className="w-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/800px-Flag_of_Bangladesh.svg.png" alt="" />
                                                                    <small>Bangladesh</small>
                                                                </div>
                                                                <IoIosArrowForward />
                                                            </button>
                                                            <ul className="absolute z-30 -right-16 top-0 hidden text-gray-700  group-hover:block border rounded bg-white w-20">
                                                                <li className="hover:bg-slate-200 py-1 w-full p-2">
                                                                    Bangla
                                                                </li>
                                                                <li className="hover:bg-slate-200 py-1 w-full p-2">
                                                                    English
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                                    <div>
                                                        <div className="relative group">
                                                            <button className="flex items-center justify-between gap-2 w-full">
                                                                <div className="flex items-center gap-2">
                                                                    <img className="w-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/800px-Flag_of_Bangladesh.svg.png" alt="" />
                                                                    <small>Bangladesh</small>
                                                                </div>
                                                                <IoIosArrowForward />
                                                            </button>
                                                            <ul className="absolute z-30 -right-16 top-0 hidden text-gray-700  group-hover:block border rounded bg-white w-20">
                                                                <li className="hover:bg-slate-200 py-1 w-full p-2">
                                                                    Bangla
                                                                </li>
                                                                <li className="hover:bg-slate-200 py-1 w-full p-2">
                                                                    English
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                                    <div>
                                                        <div className="relative group">
                                                            <button className="flex items-center justify-between gap-2 w-full">
                                                                <div className="flex items-center gap-2">
                                                                    <img className="w-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/800px-Flag_of_Bangladesh.svg.png" alt="" />
                                                                    <small>Bangladesh</small>
                                                                </div>
                                                                <IoIosArrowForward />
                                                            </button>
                                                            <ul className="absolute z-30 -right-16 top-0 hidden text-gray-700  group-hover:block border rounded bg-white w-20">
                                                                <li className="hover:bg-slate-200 py-1 w-full p-2">
                                                                    Bangla
                                                                </li>
                                                                <li className="hover:bg-slate-200 py-1 w-full p-2">
                                                                    English
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-5">
                                    <div>
                                        <label className="font-semibold" htmlFor="emailOrPhn"><small>Email Or Phone</small></label>
                                        <br />
                                        <input className="border rounded w-44 p-1" type="number" placeholder="+008" id="emailOrPhn" />
                                    </div>
                                    <div>
                                        <label className="font-semibold" htmlFor="LPass"><small>Password</small></label>
                                        <br />
                                        <input className="border rounded w-44 p-1" type="password" placeholder="########" id="LPass" />
                                        <br />
                                    </div>
                                    <button className="px-8 py-1 bg-orange-500 rounded text-white font-semibold -mb-5">Login</button>
                                </div>

                                <a href="">
                                    <p className="underline"><small>Forgot your password?</small></p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* header area end here */}
            <main>

                {/* resister form section start here */}
                <section style={{ background: "#FD5417" }}>
                    <div className="max-w-6xl mx-auto py-10">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div>
                                <h1 className="text-white text-5xl font-bold">Bangladesh's #1 Marketplace</h1>
                                <p className="text-xl text-white mt-7">Create a Daraz seller account in 5 minutes and reach millions of customers today!</p>
                            </div>
                            <div>
                                <div className="flex items-center justify-between gap-5">
                                    <p className="text-sm text-white">Want to sell from overseas to Pakistan?</p>
                                    <button className="text-sm px-4 py-1 border border-white text-white font-bold rounded">Register as Global Seller</button>
                                </div>

                                <div className="mt-5 bg-slate-200 rounded-xl px-10 py-7">
                                    <h2 className="text-3xl font-semibold text-center mb-3">Create an Account</h2>
                                    <p className=" text-lg text-center">Welcome! Millions of Daraz users are waiting to buy your product.
                                    </p>
                                    <form action="">
                                        <div className="mt-5">
                                            <label htmlFor="phnNumber">Phone</label>
                                            <br />
                                            <input className="border p-1 w-full rounded-md px-4" type="number" id="phnNumber" placeholder="+880 enter your phone number" />
                                        </div>
                                        <div className="mt-5">
                                            <label className="font-bold" htmlFor="phnNumber">Verification</label>
                                            <br />
                                            {
                                                !(slideInput == 100) ? <div>
                                                    <div className="mt-4">
                                                        <div className="relative">
                                                            <input
                                                                id="slider"
                                                                type="range"
                                                                min="0"
                                                                max="100"
                                                                value={slideInput}
                                                                onChange={handleChange}
                                                                className="w-full h-2 appearance-none rounded-full focus:outline-none"
                                                            />
                                                        </div>
                                                    </div>
                                                </div> : ""
                                            }
                                        </div>

                                        {
                                            (slideInput == 100) ? <div>
                                                <label htmlFor="phnNumber">The verification code has been sent to {`0856749766`}</label>
                                                <br />
                                                <div className="relative">
                                                    <input className="border p-1 w-full rounded-md px-4" type="number" id="Enter " placeholder="Enter verification code" />
                                                    <button className="absolute right-3 top-1 text-slate-500">Send</button>
                                                </div>
                                            </div> : ""
                                        }

                                        <button type="submit" className="rounded-md bg-orange-600 mt-7 w-full p-1 text-white">Create Account</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* resister form section end here */}

            </main>
            <footer>

            </footer>

        </section>
    );
};

export default VendorSignUpPage;