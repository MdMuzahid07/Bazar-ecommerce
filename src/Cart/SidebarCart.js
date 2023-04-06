import React from 'react';
import { AiOutlineClose, AiOutlineShopping } from 'react-icons/ai';
import ProductCartCard from './ProductCartCard';
import 'animate.css';

const SidebarCart = ({ isCartOpen, toggleSidebarCart }) => {
    return (
        <section className="min-h-screen w-full lg:w-72 xl:w-96 bg-white drop-shadow fixed top-0 right-0 z-50 p-7 animate__animated animate__slideInRight">
            <div className="flex items-center justify-between mb-3">
                <p className="text-lg flex items-center"><AiOutlineShopping style={{ fontSize: "25px", marginRight: "5px" }} /> <span><small>3 items</small></span></p>
                <button onClick={toggleSidebarCart} className="btn btn-sm rounded-none"><AiOutlineClose /></button>
            </div>
            <hr />
            <div className="mt-2">
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
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