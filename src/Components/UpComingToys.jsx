import React from 'react';
import EachCard from './EachCard';
import { Link } from 'react-router';
import useCustomData from '../Hooks/UseCustomData';

const UpComingToys = () => {
    const {datas,loading} = useCustomData();
    const sliceData = datas.slice(7,10);
    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    return (
        <>
        <h1 className='font-bold text-3xl my-8 text-center'>Up comin toys</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
         {sliceData.map(data => <EachCard key={data.toyId} data={data}/>)}
        </div>
        <Link to="/upcoming-toys" className='text-orange-400 text-lg font-semibold my-4'>View more</Link>
        </>
    );
};

export default UpComingToys;