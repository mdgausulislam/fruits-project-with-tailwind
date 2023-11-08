import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import MainLayout from './MainLayout';
import Footer from '../Components/MiddlePart.jsx/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <MainLayout></MainLayout>
            <Footer></Footer>
        </div>
    );
};

export default Main;