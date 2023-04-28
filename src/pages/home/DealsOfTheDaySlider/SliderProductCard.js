import React from 'react';
import { AiOutlineStar, AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import styles from "../../../styles/SliderProductCard.module.css";
import { BiShoppingBag } from 'react-icons/bi';

const SliderProductCard = () => {
    return (
        <div className={`bg-white rounded border border-white hover:border hover:border-black transition duration-500 relative ${styles.productCard}`}>
            <div>
                <img className={`w-full ${styles.cardImgZoom}`} src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F1.SilverHighNeckSweater.png&w=1920&q=75" alt="productImg" />
            </div>
            <div className="p-5">
                <div className="text-center">
                    <h1 className="text-sm">Silver High Neck Sweater</h1>
                    <h1 className="text-xl font-bold my-2 text-center">$210.00</h1>
                </div>
                <div className="flex items-center gap-3">
                    <button className="border rounded-full flex justify-center items-center max-w-16 max-h-16 p-1">
                        <BiShoppingBag />
                    </button>
                    <button className="border border-black bg-black hover:bg-white hover:text-black text-white rounded-full font-bold w-full text-xs p-1">BUY NOW</button>
                    <button className="border rounded-full flex justify-center items-center max-w-16 max-h-16 p-1">
                        <AiOutlineHeart />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SliderProductCard;