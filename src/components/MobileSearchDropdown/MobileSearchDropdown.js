import React from 'react';

const MobileSearchDropdown = ({ toggleMobileSearchDropdown }) => {
    return (
        <navbar className="min-h-screen w-full bg-white drop-shadow fixed top-0 z-50 p-5 animate__animated animate__fadeInDownBig">
            <div>
                <button onClick={toggleMobileSearchDropdown}>X</button>
            </div>
        </navbar>
    );
};

export default MobileSearchDropdown;