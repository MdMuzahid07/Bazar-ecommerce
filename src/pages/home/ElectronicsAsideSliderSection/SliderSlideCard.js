import React from 'react';
import { AiOutlineStar, AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import styles from "../../../styles/SliderProductCard.module.css";

const SliderSlideCard = () => {
    return (
        <div className={`bg-white rounded border border-white hover:border hover:border-black transition duration-500 relative ${styles.productCard}`}>
            <div className={`absolute top-5 right-4 hidden  animate__animated animate__backInRight ${styles.viewHeartIcon}`}>
                <AiOutlineEye className="mb-3 text-slate-400" />
                <AiOutlineHeart className="text-slate-400" />
            </div>
            <div>
                <img className={`w-full ${styles.cardImgZoom}`} src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=1920&q=75" alt="productImg" />
            </div>
            <div className="p-5">
                <div className="text-center">
                    <h1 className="text-sm">Silver High Neck Sweater</h1>
                    <h1 className="text-lg font-bold my-1">$210.00</h1>
                    <div className="flex items-center justify-center">
                        <AiOutlineStar style={{ fontSize: "12px" }} />
                        <AiOutlineStar style={{ fontSize: "12px" }} />
                        <AiOutlineStar style={{ fontSize: "12px" }} />
                        <AiOutlineStar style={{ fontSize: "12px" }} />
                        <AiOutlineStar style={{ fontSize: "12px" }} />
                        <p className="ml-2"><small>(0)</small></p>
                    </div>
                </div>
                <button className="border border-black hover:bg-black hover:text-white rounded w-full mt-4 p-1">Add To Cart</button>
            </div>
        </div>
    );
};

export default SliderSlideCard;