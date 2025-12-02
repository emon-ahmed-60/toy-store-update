import React from 'react';
import Slider from '../Components/Slider';
import ToyCard from '../Components/ToyCard';
import CustomerReviews from '../Components/CustomerReviews';
import UpComingToys from '../Components/UpComingToys';


const Home = () => {
  
    return (
       <>
       <title>Toy Store - Home</title>
       <section className='container mx-auto px-5 my-8'>

       <Slider/>
       </section>
       <section className='container mx-auto px-5 my-8'>
          <ToyCard/>
       </section>
       <section className='container mx-auto px-5 my-8'>
         <UpComingToys/>
       </section>
       <section className='container mx-auto px-5 my-8'>
         <CustomerReviews/>
       </section>
       </>
    );
};

export default Home;