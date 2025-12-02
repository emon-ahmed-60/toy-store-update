import React, { use } from 'react';
import { useParams } from 'react-router';
import useCustomData from '../Hooks/UseCustomData';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

const ToyDetails = () => {
  const {user} = use(AuthContext);


    const {id} = useParams();
    const {datas,loading} = useCustomData();
    const findData = datas.find(data => data.toyId === Number(id));
    
    const {pictureURL,toyName,rating,availableQuantity,price,sellerName,sellerEmail,description,subCategory} = findData || {}

    const handleTry = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;

   
      toast.success("form submitted")
    }

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    return (<div className='flex flex-col md:flex-row justify-evenly items-center'>
    <title>Toy Store - toy details</title>
        <div className='my-8 flex flex-col items-center justify-center'>
            <div className="card bg-base-100 shadow-sm flex">
  <figure>
    <img
    className='w-full max-h-48 object-cover'
    src={pictureURL}
    alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-lg"> {toyName} </h2>
    <p>{description} </p>
    <div className='flex items-center justify-between'>
        <p className='font-semibold'>Rating : {rating}</p>
        <p className='font-semibold text-right'>Quantity : {availableQuantity}</p>
    </div>
    <p className='font-semibold'>Price : {price}</p>
   <div className='flex items-center justify-between my-2'>
     <p className='font-semibold'> {sellerName} </p>
    <p className='text-right font-semibold'> {sellerEmail} </p>
   </div>
   <p className='font-bold text-center'> {subCategory} </p>
  </div>
</div>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleTry}>
          <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" defaultValue={user?.displayName ? user.displayName : "your name"} name='name'/>
          <label className="label">Email</label>
          <input type="email" className="input" defaultValue={user?.email} name='email'/>
                    
          <button className="btn btn-neutral mt-4">Try Now</button>
        </fieldset>
        </form>
      </div>
    </div>
    </div>
    );
};

export default ToyDetails;