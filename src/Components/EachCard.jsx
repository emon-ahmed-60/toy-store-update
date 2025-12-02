import React from "react";
import { Link } from "react-router";

const EachCard = ({ data }) => {
  const { toyName, pictureURL, rating, availableQuantity, price, toyId } = data;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
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
