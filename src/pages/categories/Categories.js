import React from 'react';
import { GrApps, GrMoreVertical, GrMenu } from "react-icons/gr";
import { AiOutlineStar } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CategoriesProductCard from './CategoriesProductCard';

const Categories = () => {
    return (
        <section style={{ backgroundColor: "#F6F9FC" }}>
            <div className="max-w-6xl mx-auto">


                {/* short by and view change header section start here */}

                <header className="pt-8 pb-14 px-3 lg:px-0">
                    <div className="grid md:grid-cols-2 bg-white px-5 py-2 rounded-lg drop-shadow relative">
                        <div >
                            <h1 className="text-lg">Searching for “ {`mobile phone`} ”</h1>
                            <p>{`48`} result found</p>
                        </div>
                        <div className=" flex flex-wrap items-center gap-9 mt-3 md:mt-0 md:absolute right-5 top-3">
                            <div className="flex flex-wrap items-center gap-4">
                                <div>
                                    <p>Short by:</p>
                                </div>
                                <div>
                                    <select
                                        className="block px-4 py-2  rounded-md shadow-sm outline-none border w-44"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <p>View:</p>
                                <div className="flex items-center gap-3">
                                    <button><GrApps /></button>
                                    <button className="flex"><GrMoreVertical /><GrMenu className="-ml-2" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* short by and view change header section end here */}



                {/* categories page main layout section start here */}

                <section className="pb-16">
                    <div className="grid md:grid-cols-7 gap-5">
                        <aside className="md:col-span-2 bg-white rounded-lg p-6">
                            <h1 className="text-sm font-bold mb-2">Categories</h1>

                            <ul>
                                <li className="mb-1">
                                    <a href=""><small>Bath Preparations</small></a>
                                </li>
                                <li className="mb-1">
                                    <a href=""><small>Eye Makeup Preparations</small></a>
                                </li>
                                <li className="mb-1">
                                    <a href=""><small>Fragrance</small></a>
                                </li>
                                <li className="mb-1">
                                    <a href=""><small>Hair Preparations</small></a>
                                </li>
                            </ul>

                            <hr className="my-4" />

                            <div>
                                <h3 className="text-sm font-bold mb-4">Price Range</h3>
                                <div className="flex items-center gap-2">
                                    <input className="border rounded p-1 w-full" placeholder="0" type="number" />
                                    <p>-</p>
                                    <input className="border rounded p-1 w-full" placeholder="250" type="number" />
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div>
                                <h3 className="text-sm font-bold mb-3">Brands</h3>

                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <input type="checkbox" name="" id="maccs" />
                                        <label htmlFor="maccs"><p><small>Maccs</small></p></label>
                                    </div>

                                    <div className="flex items-center gap-2 mb-2">
                                        <input type="checkbox" name="" id="karts" />
                                        <label htmlFor="karts"><p><small>Karts</small></p></label>
                                    </div>

                                    <div className="flex items-center gap-2 mb-2">
                                        <input type="checkbox" name="" id="baars" />
                                        <label htmlFor="baars"><p><small>Baars</small></p></label>
                                    </div>

                                    <div className="flex items-center gap-2 mb-2">
                                        <input type="checkbox" name="" id="bukks" />
                                        <label htmlFor="bukks"><p><small>Bukks</small></p></label>
                                    </div>

                                    <div className="flex items-center gap-2 mb-2">
                                        <input type="checkbox" name="" id="luasis" />
                                        <label htmlFor="luasis"><p><small>Luasis</small></p></label>
                                    </div>
                                </div>

                                <hr className="my-4" />

                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <input type="checkbox" name="" id="onsale" />
                                        <label htmlFor="onsale"><p><small>On Sale</small></p></label>
                                    </div>

                                    <div className="flex items-center gap-2 mb-2">
                                        <input type="checkbox" name="" id="inStock" />
                                        <label htmlFor="inStock"><p><small>In Stock</small></p></label>
                                    </div>

                                    <div className="flex items-center gap-2 mb-2">
                                        <input type="checkbox" name="" id="featured" />
                                        <label htmlFor="featured"><p><small>Featured</small></p></label>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div>
                                <h3 className="text-sm font-bold mb-3">Ratings</h3>

                                <div className="flex items-center gap-2 mb-2">
                                    <input type="checkbox" name="" id="star1" />
                                    <label htmlFor="star1">
                                        <div className="flex items-center">
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                        </div>
                                    </label>
                                </div>

                                <div className="flex items-center gap-2 mb-2">
                                    <input type="checkbox" name="" id="star2" />
                                    <label htmlFor="star2">
                                        <div className="flex items-center">
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                        </div>
                                    </label>
                                </div>

                                <div className="flex items-center gap-2 mb-2">
                                    <input type="checkbox" name="" id="star3" />
                                    <label htmlFor="star3">
                                        <div className="flex items-center">
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                        </div>
                                    </label>
                                </div>

                                <div className="flex items-center gap-2 mb-2">
                                    <input type="checkbox" name="" id="star4" />
                                    <label htmlFor="star4">
                                        <div className="flex items-center">
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                        </div>
                                    </label>
                                </div>

                                <div className="flex items-center gap-2 mb-2">
                                    <input type="checkbox" name="" id="star5" />
                                    <label htmlFor="star5">
                                        <div className="flex items-center">
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                            <AiOutlineStar style={{ fontSize: "15px" }} />
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div>
                                <h3 className="text-sm font-bold mb-3">Colors</h3>

                                <div className="flex items-center gap-2">
                                    <button><BsCircle style={{ fontSize: "20px", background: "#1C1C1C", borderRadius: "50%", }} /></button>
                                    <button><BsCircle style={{ fontSize: "20px", background: "#FF7A7A", borderRadius: "50%", }} /></button>
                                    <button><BsCircle style={{ fontSize: "20px", background: "#FFC672", borderRadius: "50%", }} /></button>
                                    <button><BsCircle style={{ fontSize: "20px", background: "#84FFB5", borderRadius: "50%", }} /></button>
                                    <button><BsCircle style={{ fontSize: "20px", background: "#70F6FF", borderRadius: "50%", }} /></button>
                                    <button><BsCircle style={{ fontSize: "20px", background: "#6B7AFF", borderRadius: "50%", }} /></button>
                                </div>
                            </div>

                        </aside>

                        <div className="md:col-span-5">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                <CategoriesProductCard />
                                <CategoriesProductCard />
                                <CategoriesProductCard />
                                <CategoriesProductCard />
                                <CategoriesProductCard />
                                <CategoriesProductCard />
                                <CategoriesProductCard />
                                <CategoriesProductCard />
                                <CategoriesProductCard />
                            </div>


                            {/* pagination section start here */}
                            <div className="flex flex-wrap items-center justify-between mt-3">
                                <div>
                                    <p><small>Showing {`1.,9`} of {`1.3`}k products</small></p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <button className="border border-red-300 w-7 h-7 flex items-center justify-center mr-3 rounded-full"><MdKeyboardArrowLeft /></button>

                                    <button className="border border-red-300 w-7 h-7 flex items-center justify-center mx-1 rounded-full">1</button>

                                    <button className="border border-red-300 w-7 h-7 flex items-center justify-center mx-1 rounded-full">2</button>

                                    <button className="border border-red-300 w-7 h-7 flex items-center justify-center mx-1 rounded-full">3</button>

                                    <button className="border border-red-300 w-7 h-7 flex items-center justify-center ml-3 rounded-full"><MdKeyboardArrowRight /></button>
                                </div>
                            </div>
                            {/* pagination section end here */}
                        </div>

                    </div>
                </section>

                {/* categories page main layout section start here */}

            </div>
        </section>
    );
};

export default Categories;