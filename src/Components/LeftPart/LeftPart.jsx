import React from 'react';
import dashMenu from '../../assets/icon/menu-food-list.svg';
import downMenu from '../../assets/icon/fruits-down.svg'

const LeftPart = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col justify-between">
                {/* Page content here */}
                <div className='flex justify-between items-center lg:hidden'>
                    <div className='flex'>
                        <img src={dashMenu} alt="" />
                        <p className='ms-3'>Select Food Item</p>
                    </div>
                    <div>
                        <label htmlFor="my-drawer-2" className="btn drawer-button"><img src={downMenu} alt="" /></label>
                    </div>
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>

    );
};

export default LeftPart;