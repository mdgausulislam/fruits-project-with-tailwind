import React from 'react';
import SideBar from '../Components/SideBar/SideBar';
import LeftPart from '../Components/LeftPart/LeftPart';
import { Outlet } from 'react-router-dom';
import MiddlePart from '../Components/MiddlePart.jsx/MiddlePart';
import RightPart from '../Components/RightPart/RightPart';

const MainLayout = () => {
    return (
        <div className="flex">
            <div>
                <SideBar></SideBar>
            </div>
            <div className="w-full p-2 bg-[#EEF0F2] rounded-tl-3xl">
                <div className="w-full lg:grid lg:grid-cols-[1fr,8fr,3fr] sm:grid-cols-1 gap-2">
                    <div>
                        <LeftPart></LeftPart>
                    </div>
                    <div>
                        <MiddlePart></MiddlePart>
                        <Outlet></Outlet>
                    </div>
                    <div>
                        <RightPart></RightPart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;