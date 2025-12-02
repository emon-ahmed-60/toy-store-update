import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const EachCard = ({ data }) => {
  const {theme} = use(AuthContext)
  const { toyName, pictureURL, rating, availableQuantity, price, toyId } = data;
  return (
    <div>
      <div className={`card bg-base-100 shadow-sm text-[#343A40] ${theme === 'dark' && 'text-white'}`}>
        <figure>
          <img
            className="w-full max-h-48 object-cover"
            src={pictureURL}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-lg"> {toyName} </h2>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Rating : {rating}</p>
            <p className="font-semibold text-right">
              Quantity : {availableQuantity}
            </p>
          </div>
          <p className="font-semibold">Price : {price}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/toy-detail/${toyId}`}
              className="btn btn-primary w-full"
            >
              View more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCard;
