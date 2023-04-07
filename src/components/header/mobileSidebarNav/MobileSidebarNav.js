import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import CollapseComponent from './CollapseComponent';


const MobileSidebarNav = ({ toggleSidebarNav }) => {
    return (
        <navbar className="min-h-screen w-full bg-white drop-shadow fixed top-0 left-0 z-50 p-5 animate__animated animate__slideInLeft">
            <div className="flex justify-center p-5">
                <div className="max-w-xs w-full">
                    <div className="flex justify-end">
                        <button onClick={toggleSidebarNav}><AiOutlineClose style={{ fontSize: "20px" }} /></button>
                    </div>
                    <div className="mt-7">
                        <ul>
                            <li className="mb-3">
                                <a href="">Home</a>
                            </li>
                            <li className="mb-3 w-full flex justify-between items-center">
                                <a href="">User Account</a>
                                <CollapseComponent>
                                    <ul>
                                        <li className="mb-2">
                                            <a href="">Order List</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="">Order Details</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="">View Profile</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="">Edit Profile</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="">Address List</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="">Add Address</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="">All tickets</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="">Wishlist</a>
                                        </li>
                                    </ul>
                                </CollapseComponent>
                            </li>
                            <li className="mb-3 w-full flex justify-between items-center">
                                <a href="">Vendor Account</a>
                                <CollapseComponent>
                                    <ul>
                                        <li className="mb-2">
                                            <a href="">Dashboard</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="">Profile</a>
                                        </li>
                                    </ul>
                                </CollapseComponent>
                            </li>
                            <li className="mb-3 w-full flex justify-between items-center">
                                <a href="">Products</a>
                                <CollapseComponent>
                                    <ul>
                                        <li className="mb-2">
                                            <a href="">Dashboard</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="">Profile</a>
                                        </li>
                                    </ul>
                                </CollapseComponent>
                            </li>
                            <li className="mb-3 w-full flex justify-between items-center">
                                <a href="">Orders</a>
                                <CollapseComponent>
                                    <ul>
                                        <li className="mb-2">
                                            <a href="">All Order</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="">Order Details</a>
                                        </li>
                                    </ul>
                                </CollapseComponent>
                            </li>
                            <li className="mb-3">
                                <a href="">Sale Page</a>
                            </li>
                            <li className="mb-3 w-full flex justify-between items-center">
                                <a href="">Shop</a>
                                <CollapseComponent>
                                    <ul>
                                        <li className="mb-2">
                                            <a href="">Search Product</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="">Single Product</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="">Cart</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="">Checkout</a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="">Order Confirmation</a>
                                        </li>
                                    </ul>
                                </CollapseComponent>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </navbar>
    );
};

export default MobileSidebarNav;