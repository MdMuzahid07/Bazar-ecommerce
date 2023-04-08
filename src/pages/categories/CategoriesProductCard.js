import React, { useState } from 'react';
import { AiOutlineStar } from "react-icons/ai";

const CategoriesProductCard = () => {
    const [quantity, setQuantity] = useState(0);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="border rounded-lg p-3 bg-white">
            <img src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F7.PoliceGrayEyeglasses.png&w=1920&q=75" alt="" />
            <div>
                <h2 className="text-sm font-bold">Police grey Eyeglasses</h2>
                <div className="flex items-center my-2">
                    <AiOutlineStar style={{ fontSize: "15px" }} />
                    <AiOutlineStar style={{ fontSize: "15px" }} />
                    <AiOutlineStar style={{ fontSize: "15px" }} />
                    <AiOutlineStar style={{ fontSize: "15px" }} />
                    <AiOutlineStar style={{ fontSize: "15px" }} />
                </div>
                <div className="flex items-center justify-between relative">
                    <p className="text-red-500"><small>$187.00</small></p>
                    <div className="absolute bottom-0 right-0">
                        {
                            (quantity > 0) ? <button onClick={decrementQuantity} className="px-2 w-7 h-7 border border-red text-red-500 rounded">-</button> : ""
                        }
                        {

                            (quantity > 0) ? <p className="py-2 text-center">{quantity}</p> : ""
                        }
                        <button onClick={incrementQuantity} className="px-2 border border-red text-red-500 rounded">+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesProductCard;