import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaStar, FaStarHalf } from "react-icons/fa";
import "./card.css";

export default function Card({ name, image, net_price, taxes, price }) {
  const [starArray, setStarArray] = useState([]);
  const randomStar = () => {
    let full, empty;
    let random = Math.random() * 6;
    full = Math.floor(random);
    empty = 5 - full;
    let i = 0, j = 0;

    while(i < full && starArray < 6){
      setStarArray([...starArray, 1]);
      i++;
    }
    while(j < empty && starArray < 6){
      setStarArray((starArray) => [...starArray, 0]);
      j++;
      console.log(j);
    }    
    console.log({i: i, j: j, full: full, empty: empty});
  }
  useEffect(() => {
    randomStar();
  }, [])






  return (
    <div
      className=" 
    w-4/5 xs:w-3/5 sm:w-2/5 sm:m-3 xl:m-0 mb-3 box-shadow rounded-2xl 
    content-center hover:scale-95 hover:shadow-inner cursor-pointer 
    transition-transform bg-blue-50 flex flex-col lg:w-1/55 relative lg:m-1"
    >
      <FaShoppingCart color="white" className="absolute top-3 right-3 w-4" />
      <div className="rounded-xl rounded-b-none overflow-hidden ">
        <img src={image} alt="card-image" />
      </div>
      <div className="w">
        <div className="ml-2 sm:ml-0 px-4 py-3 flex flex-col justify-between">
          <h3 className="font-bold text-lg ">{name}</h3>
          <p>${price}</p>
        </div>
        <div className="flex flex-col justify-start">
          {starArray.map(i => {
           {i === 1 ? <i><FaStar color="yellow" /></i> : <i><FaStar color="blue" /></i>}}
          )}
        </div>
      </div>
    </div>
  );
}
