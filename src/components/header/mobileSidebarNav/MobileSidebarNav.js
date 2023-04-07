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
                                        <li>
                                            <a href="">Order List</a>
                                        </li>
                                        <li>
                                            <a href="">Order Details</a>
                                        </li>
                                        <li>
                                            <a href="">View Profile</a>
                                        </li>
                                        <li>
                                            <a href="">Edit Profile</a>
                                        </li>
                                        <li>
                                            <a href="">Address List</a>
                                        </li>
                                        <li>
                                            <a href="">Add Address</a>
                                        </li>
                                        <li>
                                            <a href="">All tickets</a>
                                        </li>
                                        <li>
                                            <a href="">Wishlist</a>
                                        </li>
                                    </ul>
                                </CollapseComponent>
                            </li>
                            <li className="mb-3">
                                <a href="">Vendor Account</a>
                            </li>
                            <li className="mb-3">
                                <a href="">Products</a>
                            </li>
                            <li className="mb-3">
                                <a href="">Orders</a>
                            </li>
                            <li className="mb-3">
                                <a href="">Sale Page</a>
                            </li>
                            <li className="mb-3">
                                <a href="">Shop</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </navbar>
    );
};

export default MobileSidebarNav;