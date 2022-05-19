import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./card.css";

export default function Card({ name, image, price, id }) {
  let starArray = [];
  const randomStar = () => {
    let full, empty;
    let random = Math.random() * 6;
    full = Math.floor(random);
    empty = 5 - full;
    let i = 0,
      j = 0;

    while (i < full && starArray.length < 6) {
      starArray.push(1);
      i++;
    }
    while (j < empty && starArray.length < 6) {
      starArray.push(0);
      j++;
    }
  };
  randomStar();

  return (
    <div
      className=" 
    w-4/5 xs:w-3/5 sm:w-2/5 sm:m-3 mb-3 box-shadow rounded-2xl 
    content-center hover:scale-95 hover:shadow-inner cursor-pointer 
    transition-transform bg-blue-50 flex flex-col lg:w-1/55 relative lg:m-1"
    >
      <Link className="inline-block" to={`/products/product/${id}`}>
        <FaShoppingCart color="white" className="absolute top-3 right-3 w-4" />
        <div className="rounded-xl rounded-b-none overflow-hidden ">
          <img src={image} alt="card-image" />
        </div>
        <div>
          <div className="ml-2 sm:ml-0 px-4 py-3 flex flex-col justify-between ">
            <h3 className="font-bold text-lg ">{name}</h3>
            <p>${price}</p>
            <div className="flex flex-row justify-start mt-2">
              {starArray.map((i, id) => (
                <i 
                  key={id}
                  className={`${i === 1 ? "text-yellow-400" : "text-gray-400"}`}
                >
                  <FaStar />
                </i>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
