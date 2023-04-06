import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const ProductCartCard = () => {
    return (
        <section className="my-3">
            <div className="grid grid-cols-5 gap-3 mb-3">
                <div className="col-span-1">
                    <button className="w-8 h-8 border border-red-500 rounded-full font-bold">+</button>
                    <div className="w-8"><p className="text-center">0</p></div>
                    <button className="w-8 h-8 border border-red-500 rounded-full font-bold">-</button>
                </div>
                <div className="col-span-4">
                    <div>
                        <div className="flex items-center w-full">
                            <div>
                                <img className="w-20" src="https://bazaar.ui-lib.com/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png" alt="product_img" />
                            </div>
                            <div>
                                <p className="text-sm">Sliver High Neck Swi...</p>
                                <p className="text-xs"><small>$210 x 2</small></p>
                                <p className="text-sm">$420</p>
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