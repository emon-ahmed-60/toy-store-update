import React from 'react';
import useCustomData from '../Hooks/UseCustomData';
import EachCard from './EachCard';

const ToyCard = () => {
    const {datas,loading} = useCustomData();
    const availableData = datas.slice(0,6);
    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>

    }
    return (
        <>
        <h1 className='font-bold text-3xl my-8 text-center'>Popular Toys</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
         {availableData.map(data => <EachCard key={data.toyId} data={data}/>)}   
        </div>
        </>
    );
};

export default ToyCard;