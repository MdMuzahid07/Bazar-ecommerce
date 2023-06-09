import React, { useState } from 'react';
import { GrLanguage } from 'react-icons/gr';
import { IoIosArrowForward } from 'react-icons/io';
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';


const VendorSignUpPage = () => {
    // this state for FAQ accordion
    const [accordionIsOpen, setAccordionIsOpen] = useState(false);

    // for header language state
    const [isOpen, setIsOpen] = useState(false);

    // input slider functionality for verification 
    const [slideInput, setSlideInput] = useState(0);

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
                    <div className="max-w-6xl mx-auto py-20">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div>
                                <h1 className="text-white text-6xl font-bold mt-16">Bangladesh's #1 Marketplace</h1>
                                <p className="text-xl text-white mt-7">Create a Daraz seller account in 5 minutes and reach millions of customers today!</p>
                                <div>
                                    <img src="https://static.vecteezy.com/system/resources/previews/009/417/126/non_2x/ecommerce-icon-empty-shopping-cart-3d-illustration-free-png.png" alt="" />
                                </div>
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
                                                                className="w-full h-5 appearance-none rounded focus:outline-none"
                                                            />
                                                        </div>
                                                    </div>
                                                </div> : ""
                                            }
                                        </div>

                                        {
                                            (slideInput == 100)
                                                ?
                                                <div>
                                                    <div>
                                                        <label htmlFor="phnNumber">The verification code has been sent to {`0856749766`}</label>
                                                        <br />
                                                        <div className="relative">
                                                            <input className="border p-1 w-full rounded-md px-4" type="number" id="Enter " placeholder="Enter verification code" />
                                                            <button className="absolute right-3 top-1 text-slate-500">Send</button>
                                                        </div>
                                                    </div>

                                                    <div className="mt-5">
                                                        <label htmlFor="PasS">Setup Password</label>
                                                        <br />
                                                        <input className="border p-1 w-full rounded-md px-4" type="number" id="PasS" placeholder="Min.8 character, 1 uppercase letter, 1 number, 1 symbol" />

                                                        <input className="border p-1 w-full rounded-md px-4 mt-4" type="number" id="PasS" placeholder="Confirm password" />
                                                    </div>


                                                    <div className="mt-5">
                                                        <label className="font-bold" htmlFor="phnNumber">Enter Referral Code
                                                        </label>
                                                        <br />
                                                        <input className="border p-1 w-full rounded-md px-4" type="number" id="Enter " placeholder="Enter Referral Code" />
                                                    </div>

                                                </div>
                                                : ""
                                        }

                                        <button type="submit" className="rounded-md bg-orange-600 mt-7 w-full p-1 text-white">Create Account</button>

                                        <p className="mt-5"><small>By clicking ‘Create Account’, you’ve read and agreed to our terms and conditions <a href="">Terms & Conditions</a> and for my personal data to be processed according to Daraz <a href="">Privacy Policy</a>.</small></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* resister form section end here */}




                {/* Why Sell on Daraz? section start here */}

                <section className="bg-white">
                    <div className="max-w-6xl mx-auto py-20">
                        <h2 className="text-2xl md:text-5xl mb-16 font-semibold">Why Sell on Daraz? </h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-14">

                            <div className="flex items-center justify-center">
                                <div className="flex gap-3">
                                    <img className="w-16 h-16" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ05DV-4G3zQKO8i7rQgOhhrADWH_j5vNaoFMdBF-VmjK8YtNl7" alt="" />
                                    <div>
                                        <h1 className="mb-3 text-3xl font-semibold">Reach</h1>
                                        <p>Millions of customers on Daraz, Pakistan's most visited shopping destination</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="flex gap-3">
                                    <img className="w-16 h-16" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ05DV-4G3zQKO8i7rQgOhhrADWH_j5vNaoFMdBF-VmjK8YtNl7" alt="" />
                                    <div>
                                        <h1 className="mb-3 text-3xl font-semibold">Reach</h1>
                                        <p>Millions of customers on Daraz, Pakistan's most visited shopping destination</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="flex gap-3">
                                    <img className="w-16 h-16" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ05DV-4G3zQKO8i7rQgOhhrADWH_j5vNaoFMdBF-VmjK8YtNl7" alt="" />
                                    <div>
                                        <h1 className="mb-3 text-3xl font-semibold">Reach</h1>
                                        <p>Millions of customers on Daraz, Pakistan's most visited shopping destination</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="flex gap-3">
                                    <img className="w-16 h-16" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ05DV-4G3zQKO8i7rQgOhhrADWH_j5vNaoFMdBF-VmjK8YtNl7" alt="" />
                                    <div>
                                        <h1 className="mb-3 text-3xl font-semibold">Reach</h1>
                                        <p>Millions of customers on Daraz, Pakistan's most visited shopping destination</p>
                                    </div>
                                </div>
                            </div>


                            <div className="flex items-center justify-center">
                                <div className="flex gap-3">
                                    <img className="w-16 h-16" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ05DV-4G3zQKO8i7rQgOhhrADWH_j5vNaoFMdBF-VmjK8YtNl7" alt="" />
                                    <div>
                                        <h1 className="mb-3 text-3xl font-semibold">Reach</h1>
                                        <p>Millions of customers on Daraz, Pakistan's most visited shopping destination</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="flex gap-3">
                                    <img className="w-16 h-16" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ05DV-4G3zQKO8i7rQgOhhrADWH_j5vNaoFMdBF-VmjK8YtNl7" alt="" />
                                    <div>
                                        <h1 className="mb-3 text-3xl font-semibold">Reach</h1>
                                        <p>Millions of customers on Daraz, Pakistan's most visited shopping destination</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Why Sell on Daraz? section end here */}



                {/* img grid section start here */}

                <section className="bg-white py-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-5 relative">
                            <div className="bg-[url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQemFV2FVkGu0NsUqO5k8O86py4z5pF5vPSm_bYnGfsO7njsczG')] bg-no-repeat bg-cover bg-top rounded-2xl">

                                <div className="absolute bottom-5 left-5 text-white">
                                    <h2 className="text-2xl font-semibold">We cannot imagine doing business
                                        <br />
                                        without Daraz now</h2>
                                    <div>
                                        <div>
                                            <h3 className="text-sm mt-2 font-semibold">Ali Khemani</h3>
                                            <p><small>Founder, Craftsman</small></p>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>

                                <div className="mb-5">
                                    <iframe className="h-48 w-full shadow rounded-t-2xl" src="https://www.youtube.com/embed/uXcCW6oW5Zw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <div className="p-5 shadow rounded-b-2xl">
                                        <button className="border border-red-500 rounded-lg px-5 py-2 text-red-500 mb-3">TESTIMONY</button>
                                        <p className="text-lg">At just 16 years old, Zaid runs his own shop on Daraz where he deals in mobile accessories and other similar products. He is an inspiration to all budding entrepreneurs in the country.</p>
                                    </div>
                                </div>

                                <div>
                                    <iframe className="h-48 w-full shadow rounded-t-2xl" src="https://www.youtube.com/embed/uXcCW6oW5Zw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <div className="p-5 shadow rounded-b-2xl">
                                        <button className="border border-red-500 rounded-lg px-5 py-2 text-red-500 mb-3">TESTIMONY</button>
                                        <p className="text-lg">At just 16 years old, Zaid runs his own shop on Daraz where he deals in mobile accessories and other similar products. He is an inspiration to all budding entrepreneurs in the country.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* img grid section end here */}


                {/* 5 Simple Steps to Start Selling section start here */}

                <section className="bg-white py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl md:text-5xl mb-16 font-semibold">5 Simple Steps to Start Selling </h2>
                        <div>
                            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-7 md:gap-14">

                                <div className="flex justify-center">
                                    <div >
                                        <img className="w-16 h-16" src="https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-sign-up-button-on-white-background-png-image_4751425.png" alt="" />
                                        <div>
                                            <h1 className="mb-3 text-lg">Signup for Free</h1>
                                            <p><small>Create your account through our website or mobile app with just your phone number
                                            </small></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <div >
                                        <img className="w-16 h-16" src="https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-sign-up-button-on-white-background-png-image_4751425.png" alt="" />
                                        <div>
                                            <h1 className="mb-3 text-lg">Add Profile Information</h1>
                                            <p><small>Complete your profile by providing your email and store name so that we can identify you
                                            </small></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <div >
                                        <img className="w-16 h-16" src="https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-sign-up-button-on-white-background-png-image_4751425.png" alt="" />
                                        <div>
                                            <h1 className="mb-3 text-lg">Add Address Information</h1>
                                            <p><small>Provide all address details of your business
                                            </small></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <div >
                                        <img className="w-16 h-16" src="https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-sign-up-button-on-white-background-png-image_4751425.png" alt="" />
                                        <div>
                                            <h1 className="mb-3 text-lg">Add ID & Bank Information</h1>
                                            <p><small>Add in your ID & Business related details. Include necessary bank information for payments
                                            </small></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <div >
                                        <img className="w-16 h-16" src="https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-sign-up-button-on-white-background-png-image_4751425.png" alt="" />
                                        <div>
                                            <h1 className="mb-3 text-lg">List Products</h1>
                                            <p><small>Add products to your store through seller center. Start selling as soon as your products go live after going through quality control"
                                            </small></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* 5 Simple Steps to Start Selling section end here */}



                {/* learn about daraz seller signup section start here */}

                <section className="bg-white py-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="p-4 rounded-lg" style={{ background: "#F75606" }}>
                            <div className=" grid md:grid-cols-6 gap-7 md:gap-14">
                                <div className="col-span-2">
                                    <h1 className="text-2xl md:text-5xl font-bold text-wrap text-white">Learn About Daraz Seller Sign Up</h1>
                                    <p className="text-white text-lg mt-10">Watch Here </p>
                                </div>
                                <div className="col-span-4">
                                    <iframe className="w-full min-h-72 md:h-96 rounded-lg" src="https://www.youtube.com/embed/uXcCW6oW5Zw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* learn about daraz seller signup section end here */}




                {/* Use the free Daraz Seller App section start here */}


                <section className="bg-white py-20">
                    <div className="max-w-6xl mx-auto text-white">
                        <div className="p-16 rounded-lg" style={{ background: "#F75606" }}>
                            <p>GO MOBILE</p>
                            <h1 className="text-2xl md:text-5xl font-bold text-wrap text-white mb-5">Use the free Daraz Seller Ap</h1>

                            <p><small>The Daraz Seller app is packed with features to help you manage and grow your ecommerce business wherever you are. It gives you the freedom <br /> to take care of business details right from your phone.
                            </small></p>

                            <div className="flex gap-5 mt-5">
                                <button >
                                    <div className="flex items-center gap-2 border px-3 py-1 rounded">
                                        <div>
                                            <FaGooglePlay style={{ fontSize: "20px" }} />
                                        </div>
                                        <dir className="text-left leading-3	">
                                            <p><small>Get it on</small></p>
                                            <p className="font-bold text-xs">Google Play</p>
                                        </dir>
                                    </div>
                                </button>
                                <button >
                                    <div className="flex items-center gap-2 border px-3 py-1 rounded">
                                        <div>
                                            <FaAppStoreIos style={{ fontSize: "23px" }} />
                                        </div>
                                        <dir className="text-left leading-3	">
                                            <p><small>Get it on</small></p>
                                            <p className="font-bold text-xs">App Store</p>
                                        </dir>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Use the free Daraz Seller App section end here */}





                {/* Frequently Asked Questions section start here */}

                <section className="bg-white py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl md:text-5xl mb-16 font-semibold text-center">Frequently Asked Questions</h2>
                        <div>

                            <div className="border border-gray-200 rounded-md mb-5">
                                <div
                                    className="p-4 flex justify-between items-center cursor-pointer bg-slate-100 rounded-lg"
                                    onClick={() => setAccordionIsOpen(!accordionIsOpen)}
                                >
                                    <h2 className="text-lg font-medium">What categories can I sell on Daraz?</h2>
                                    <svg
                                        className={`w-6 h-6 transition-transform transform ${isOpen ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                                {accordionIsOpen && (
                                    <div className="p-4 border-t border-gray-200">
                                        <p>
                                            Daraz has over 30 main categories of goods that you can sell your products in, including fashion, electronics, FMCG, lifestyle, health & beauty to name a few. However, we do have items that are counterfeit, dangerous and prohibited by law or cultural norms which sellers must refrain from listing. Click here to learn more
                                        </p>
                                    </div>
                                )}
                            </div>


                            <div className="border border-gray-200 rounded-md mb-5">
                                <div
                                    className="p-4 flex justify-between items-center cursor-pointer bg-slate-200 rounded-lg"
                                    onClick={() => setAccordionIsOpen(!accordionIsOpen)}
                                >
                                    <h2 className="text-lg font-medium">What categories can I sell on Daraz?</h2>
                                    <svg
                                        className={`w-6 h-6 transition-transform transform ${isOpen ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                                {accordionIsOpen && (
                                    <div className="p-4 border-t border-gray-200">
                                        <p>
                                            Daraz has over 30 main categories of goods that you can sell your products in, including fashion, electronics, FMCG, lifestyle, health & beauty to name a few. However, we do have items that are counterfeit, dangerous and prohibited by law or cultural norms which sellers must refrain from listing. Click here to learn more
                                        </p>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </section>

                {/* Frequently Asked Questions section end here */}



            </main>


            <footer className="py-16 bg-white">
                <div style={{ backgroundColor: "#F75606" }}>
                    <div className="max-w-6xl mx-auto p-5">
                        <div className="flex flex-wrap items-center justify-center md:justify-between gap-5">
                            <div>
                                <h2 className="text-2xl md:text-4xl font-semibold text-white">What are you waiting for? <br /> Start selling with Daraz today.</h2>
                            </div>
                            <button className="text-white font-semibold border border-2 border-white rounded-lg px-5 py-2">GET START</button>
                        </div>
                    </div>
                </div>
            </footer>

        </section>
    );
};

export default VendorSignUpPage;