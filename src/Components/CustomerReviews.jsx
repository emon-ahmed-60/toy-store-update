import React from "react";
import customerOne from "../assets/customer-1.png";
import customerTwo from "../assets/customer-2.png";
import customerThree from "../assets/customer-3.png";
import { LiaStarSolid } from "react-icons/lia";

const CustomerReviews = () => {
  return (
    <>
      <h1 className="font-bold text-3xl my-8 text-center">Customers Review</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card bg-base-100 card-xs shadow-sm p-4 flex items-center ga-4">
          <figure className="mr-auto">
            <img src={customerOne} alt="" className="w-16" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl">Rina Akter</h2>
            <p className="font-semibold">
              My kids absolutely love the talking robot! It’s interactive,
              colorful, and keeps them entertained for hours. The sound quality
              is great, and it even helps them learn new words in a fun way. I’m
              really happy with the purchase — totally worth the price!
            </p>
            <div className="flex items-center justify-end gap-2">
              <LiaStarSolid color="yellow" className="text-lg" />
              <LiaStarSolid color="yellow" className="text-lg" />
              <LiaStarSolid color="yellow" className="text-lg" />
              <LiaStarSolid color="yellow" className="text-lg" />
              <LiaStarSolid color="yellow" className="text-lg" />
            </div>
          </div>
        </div>
        <div className="card bg-base-100 card-xs shadow-sm p-4 flex items-center ga-4">
          <figure className="mr-auto">
            <img src={customerTwo} alt="" className="w-16" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl">Adam smith</h2>
            <p className="font-semibold">
              I ordered a few toys from ToyLand, and I’m genuinely impressed
              with both the product quality and delivery speed. The packaging
              was neat, and everything arrived in perfect condition. My son
              especially loves the racing car — it looks just like the one from
              his favorite cartoon!
            </p>
            <div className="flex items-center justify-end gap-2">
              <LiaStarSolid color="yellow" className="text-lg" />
              <LiaStarSolid color="yellow" className="text-lg" />
              <LiaStarSolid color="yellow" className="text-lg" />
              <LiaStarSolid color="yellow" className="text-lg" />
              <LiaStarSolid color="yellow" className="text-lg" />
            </div>
          </div>
        </div>
        <div className="card bg-base-100 card-xs shadow-sm p-4 flex items-center ga-4">
          <figure className="mr-auto">
            <img src={customerThree} alt="" className="w-16" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl">Jamila Khan</h2>
            <p className="font-semibold">
              The soft teddy bear I bought is simply adorable! The material is
              super soft, and my daughter carries it everywhere she goes. I also
              loved how easy it was to place the order and track the delivery.
              Thank you, ToyLand, for such a wonderful experience!
            </p>
            <div className="flex items-center justify-end gap-2">
              <LiaStarSolid color="yellow" className="text-lg" />
              <LiaStarSolid color="yellow" className="text-lg" />
              <LiaStarSolid color="yellow" className="text-lg" />
              <LiaStarSolid color="yellow" className="text-lg" />
              <LiaStarSolid color="yellow" className="text-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReviews;
