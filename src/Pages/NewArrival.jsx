import React from 'react';
import UseCustomNewData from '../Hooks/UseCustomNewData';
import EachCard from '../Components/EachCard';
import useCustomData from '../Hooks/UseCustomData';


const NewArrival = () => {
    const {datas,loading} = useCustomData();
    const newToys = datas.slice(6);
    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    return (
        <>
        <title>Toy Store - New Arrival page</title>
        <h1 className='font-bold text-3xl my-8 text-center'>Up comin toys</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
         {newToys.map(data => <EachCard key={data.toyId} data={data}/>)}
        </div>    
        </>
    );
};

export default NewArrival;