import React from 'react';

const OrderTrackPage = () => {
    return (
        <section className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-between mt-10 bg-white p-3">
                <div>
                    <h3>Order #985987689598765</h3>
                    <p><small>Placed on 10 Mar 2023 21:32:26</small></p>
                </div>
                <div>
                    <h2 className="text-lg"><span className="text-slate-400 font-bold">Total</span> : $185</h2>
                </div>
            </div>
        </section>
    );
};

export default OrderTrackPage;