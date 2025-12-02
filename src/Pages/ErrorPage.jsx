import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <>
        <title>Error - 404</title>
        <div className='min-h-screen flex items-center justify-center flex-col gap-5'>
            <h1 className='font-bold text-2xl text-center'>Sorry ! Page Not Found</h1>
            <button className='btn' onClick={()=>navigate(-1)}>Go back</button>
        </div>
        </>
    );
};

export default ErrorPage;