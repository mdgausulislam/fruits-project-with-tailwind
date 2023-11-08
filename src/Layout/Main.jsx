import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import MainLayout from './MainLayout';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <MainLayout></MainLayout>
        </div>
    );
};

export default Main;