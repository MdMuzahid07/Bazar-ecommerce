import React from 'react';
import { AiOutlineClose, AiOutlineShopping } from 'react-icons/ai';
import ProductCartCard from './ProductCartCard';
import 'animate.css';

const SidebarCart = ({ isCartOpen, toggleSidebarCart }) => {

    // dummy product info
    const product = [
        { _id: "igb059df7v58", img: "https://bazaar.ui-lib.com/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png", name: "Sliver High Neck Swi...", price: "210" },
        { _id: "igb059av58", img: "https://bazaar.ui-lib.com/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png", name: "Sliver High Neck Swi...", price: "210" },
        { _id: "igb0523497v58", img: "https://bazaar.ui-lib.com/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png", name: "Sliver High Neck Swi...", price: "210" },
        { _id: "igb05927v58", img: "https://bazaar.ui-lib.com/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png", name: "Sliver High Neck Swi...", price: "210" },
        { _id: "igb059dgy7v58", img: "https://bazaar.ui-lib.com/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png", name: "Sliver High Neck Swi...", price: "210" }
    ];

    return (
        <section className="min-h-screen w-full lg:w-72 xl:w-96 bg-white drop-shadow fixed top-0 right-0 z-50 p-5 animate__animated animate__slideInRight">
            <div className="flex items-center justify-between mb-3">
                <p className="text-lg flex items-center"><AiOutlineShopping style={{ fontSize: "25px", marginRight: "5px" }} /> <span><small>3 items</small></span></p>
                <button onClick={toggleSidebarCart} className="btn btn-sm rounded-none"><AiOutlineClose /></button>
            </div>
            <hr />
            <div className="mt-2">
                {
                    product?.map((product) => <ProductCartCard key={product._id} product={product} />)
                }
            </div>
            <div className="flex justify-center">
                <div className="absolute bottom-5">
                    <button className="border bg-red-500 text-white p-1 w-80 mb-3">Checkout now</button>
                    <br />
                    <button className="border border-red-500 p-1 w-80 font-bold text-red-500">View Cart</button>
                </div>
            </div>
        </section>
    );
};

export default SidebarCart;