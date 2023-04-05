import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const SidebarCart = () => {
    return (
        <section className="min-h-screen w-full lg:w-72 xl:w-96 bg-white drop-shadow fixed top-0 right-0 z-50 p-7 animate__animated animate__bounceInRight">
            <div className="flex items-center mb-3">
                <button className="btn btn-sm rounded-none"><AiOutlineClose /></button>
                <p className="text-lg ml-5">Shopping cart</p>
            </div>
            <hr />
            <div className="mt-2">
                <p>cart added product</p>
            </div>
            <div>
                <div className="absolute bottom-0">
                    <button className="border">view cart</button>
                    <button className="border">checkout</button>
                </div>
            </div>
        </section>
    );
};

export default SidebarCart;