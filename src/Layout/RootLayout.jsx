import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <>
            <header>
            <Navbar/>
            </header>
            <main className='min-h-[calc(100vh-289px)]'>
            <Outlet/>
            </main>
            <Footer/>
            <ToastContainer/>
        </>
    );
};

export default RootLayout;