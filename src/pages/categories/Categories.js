import React from 'react';
import { GrApps, GrMoreVertical, GrMenu } from "react-icons/gr";

const Categories = () => {
    return (
        <section style={{ backgroundColor: "#F6F9FC" }}>
            <div className="max-w-6xl mx-auto">


                {/* short by and view change header section start here */}

                <header className="pt-8 pb-14 px-3 lg:px-0">
                    <div className="grid md:grid-cols-2 bg-white px-5 py-3 rounded-lg drop-shadow relative">
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
                                        className="block px-4 py-2 md:py-3  rounded-md shadow-sm outline-none border w-44"
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
                        <div className="md:col-span-2 bg-white rounded-lg p-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quis animi hic. Sed aspernatur officiis porro sint provident inventore necessitatibus.
                        </div>
                        <div className="md:col-span-5">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, deleniti perferendis reiciendis vero voluptatibus dolore tempora aspernatur molestias doloremque nisi magnam libero incidunt, accusamus maxime autem impedit corporis possimus quis non reprehenderit doloribus fuga officia veniam suscipit? Labore quis error, quod ipsum possimus, distinctio voluptatum, vero amet tenetur in voluptates!
                        </div>
                    </div>
                </section>

                {/* categories page main layout section start here */}

            </div>
        </section>
    );
};

export default Categories;