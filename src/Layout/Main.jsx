import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import MainLayout from './MainLayout';
import SidebarHorizontal from '../Components/MiddlePart.jsx/SidebarHorizontal';


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <MainLayout></MainLayout>
            <SidebarHorizontal></SidebarHorizontal>
            
        </div>
    );
};

export default Main;