import React from 'react';
import useCustomData from '../Hooks/UseCustomData';
import EachCard from '../Components/EachCard';

const AllToys = () => {
    const {datas,loading} = useCustomData();

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    return (
        <>
        <title>Toy Store - All Toys</title>
        <h1 className='font-bold text-3xl my-8 text-center'>All Toys</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
         {datas.map(data => <EachCard key={data.toyId} data={data}/>)}
        </div>    
        </>
    );
};

export default AllToys;