import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const CollapseComponent = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className="">
            <button onClick={toggleCollapse}>
                {isCollapsed ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </button>
            {!isCollapsed && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

export default CollapseComponent;
