import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const ProductCartCard = ({ product }) => {
    const { name, img, price } = product;
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const updatedPrice = price * quantity; // assuming each product costs $10

    return (
        <section className="my-3">
            <div className="grid grid-cols-5 gap-3 mb-3">
                <div className="col-span-1">
                    <button onClick={incrementQuantity} className="w-8 h-8 border border-red-500 rounded-full font-bold">+</button>
                    <div className="w-8"><p className="text-center">{quantity}</p></div>
                    <button onClick={decrementQuantity} className="w-8 h-8 border border-red-500 rounded-full font-bold">-</button>
                </div>
                <div className="col-span-4">
                    <div>
                        <div className="flex items-center w-full">
                            <div>
                                <img className="w-20" src={img} alt="product_img" />
                            </div>
                            <div>
                                <p className="text-sm">{name}</p>
                                <p className="text-xs"><small>${price} x {quantity}</small></p>
                                <p className="text-sm">${updatedPrice}</p>
                            </div>
                            <AiOutlineClose style={{ fontSize: "20px", marginLeft: "10  px" }} />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    );
};

export default ProductCartCard;