import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';

const SliderProductCard = () => {
    return (
        <div className="bg-white rounded">
            <img className="w-full" src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F1.SilverHighNeckSweater.png&w=1920&q=75" alt="" />
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

export default SliderProductCard;