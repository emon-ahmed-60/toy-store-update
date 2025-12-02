import React, { use } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

const RootLayout = () => {
    const {theme} = use(AuthContext);
    return (
        <div className={`bg-[#F8F9FA] text-[#343A40] ${theme === 'dark' && "bg-black text-white"}`}>
            <header>
            <Navbar/>
            </header>
            <main className='min-h-[calc(100vh-289px)]'>
            <Outlet/>
            </main>
            <Footer/>
            <ToastContainer/>
        </div>
    );
};

export default RootLayout;