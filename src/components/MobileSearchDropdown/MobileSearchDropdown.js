import React from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

const MobileSearchDropdown = ({ toggleMobileSearchDropdown }) => {
    return (
        <navbar className="min-h-screen w-full bg-white drop-shadow fixed top-0 z-50 p-5 animate__animated animate__fadeInDownBig">
            <div className="flex justify-between items-center">
                <p>Search to bazar</p>
                <button onClick={toggleMobileSearchDropdown}><AiOutlineClose style={{ fontSize: "20px" }} /></button>
            </div>
            <div>
                <div className="flex items-center relative mt-5 px-5">
                    <AiOutlineSearch className="absolute ml-3" style={{ fontSize: "17px" }} />
                    <input
                        style={{ borderRadius: "5rem 0rem 0rem 5rem", width: "900px" }}
                        className="border h-10 pl-10" type="text" placeholder="Searching for..."
                    />
                    <div>
                        <select
                            style={{ borderRadius: "0rem 5rem 5rem 0rem", borderLeft: "none", }}
                            className="h-10 border bg-slate-50 text-sm px-5"
                        >
                            <option selected value="option1">All Categories</option>
                            <option value="option1">Car</option>
                            <option value="option2">Cloths</option>
                            <option value="option2">Electronics</option>
                            <option value="option2">Laptop</option>
                            <option value="option2">Desktops</option>
                            <option value="option2">Camera</option>
                            <option value="option2">Toys</option>
                        </select>
                    </div>
                </div>
            </div>
        </navbar>
    );
};

export default MobileSearchDropdown;