import React from 'react';
import SideBar from '../Components/SideBar/SideBar';
import LeftPart from '../Components/LeftPart/LeftPart';

const MainLayout = () => {
    return (
        <div className="flex">
            <div>
                <SideBar></SideBar>
            </div>
            <div className="w-full p-4 bg-[#EEF0F2] rounded-tl-3xl">
                <div className="w-full lg:grid lg:grid-cols-[2fr,8fr,2fr] sm:grid-cols-1 gap-5">
                    <div>
                        <LeftPart></LeftPart>
                    </div>
                    <div>
                        <h1>ggggggg</h1>
                    </div>
                    <div>
                        <h1>jjjjj</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;