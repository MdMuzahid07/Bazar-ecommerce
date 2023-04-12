import React from 'react';
import { GoPackage } from 'react-icons/go';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { GiBoxUnpacking } from 'react-icons/gi';

const OrderTrackPage = () => {
    return (
        <section className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-between mt-10 bg-white p-4">
                <div>
                    <h3>Order #985987689598765</h3>
                    <p><small>Placed on 10 Mar 2023 21:32:26</small></p>
                </div>
                <div>
                    <h2 className="text-lg"><span className="text-slate-400 font-bold">Total</span> : $185</h2>
                </div>
            </div>

            {/* package section start here */}

            <div className="bg-white p-4 mt-5">

                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <GoPackage />
                            <p>Package 1</p>
                        </div>
                        <p><small>Sold by: <span className="text-green-500 font-bold">Daraz Mall</span></small></p>
                    </div>
                    <div className="flex items-center gap-2">
                        <BsFillChatLeftTextFill />
                        <p><small>Chat Now</small></p>
                    </div>
                </div>

                <hr className="my-3" />

                <div>
                    <div className="flex flex-wrap items-center justify-between">
                        <p>Delivered on 1 Mar 2023</p>
                        <p className="flex items-center"><GiBoxUnpacking /> Standard Delivery</p>
                    </div>
                    <div className="my-10">
                        <div className="max-w-lg mx-auto">
                            <div className="w-full h-4  bg-gray-300 rounded-full">
                                <div className="h-full bg-yellow-500 rounded-full transition-all duration-500" style={{ width: `${50}%` }}></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p><small>Processing</small></p>
                                <p><small>Shipped</small></p>
                                <p><small>Delivered</small></p>
                            </div>
                            <div className="bg-slate-100 rounded-xl p-5 mt-5">
                                <ul>
                                    <li>
                                        <small> <span>13 Mar 2023 - 13:29</span> Your package has been delivered. Thank you for shopping at Daraz! </small>
                                    </li>
                                    <li>
                                        <small> <span>13 Mar 2023 - 13:29</span> Your package has been delivered. Thank you for shopping at Daraz! </small>
                                    </li>
                                    <li>
                                        <small> <span>13 Mar 2023 - 13:29</span> Your package has been delivered. Thank you for shopping at Daraz! </small>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="flex items-center justify-between mt-16">
                            <div className="flex items-center gap-2">
                                <img className="w-20 h-20 object-cover border" src="https://static-01.daraz.com.bd/p/a4c23549a21c5f759d9c8da1d12b37e4.jpg_200x200q90.jpg_.webp" alt="" />
                                <div>
                                    <a href=""><small>No Body jocker Laptop Sticker Laptop Skin Sticker & Laptop Skin for laptop Back Side Decoration</small></a>
                                    <p><small>No Warranty Available</small></p>
                                </div>
                            </div>
                            <p>$118</p>
                            <p>Q: 1</p>
                            <button>Write a review</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* package section end here */}



            {/* user info for product delivery, section start here */}

            <section>

            </section>

            {/* user info for product delivery, section end here */}

        </section>
    );
};

export default OrderTrackPage;