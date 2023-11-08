import React from 'react';
import SideBar from '../Components/SideBar/SideBar';

const MainLayout = () => {
    return (
        <div className="flex">
            <div>
               <SideBar></SideBar>
            </div>
            <div>
                hemonto
            </div>
        </div>
    );
};

export default MainLayout;