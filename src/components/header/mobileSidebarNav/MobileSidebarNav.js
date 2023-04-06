import React from 'react';

const MobileSidebarNav = ({ toggleSidebarNav }) => {
    return (
        <navbar className="min-h-screen w-full bg-white drop-shadow fixed top-0 left-0 z-50 p-5 animate__animated animate__slideInLeft">
            <div className="flex justify-center p-5">
                <button onClick={toggleSidebarNav}>X</button>
            </div>
        </navbar>
    );
};

export default MobileSidebarNav;