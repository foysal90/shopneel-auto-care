

import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
    const {title,img,price,_id} = service;
  return (
    <div>
      <div className=" w-96 bg-base-100 shadow-2xl shadow-blue-500 m-5 p-5 text-blue-700">
        <figure>
          <img
          className="w-full h-48 rounded-md"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="">
          <h2 className=" text-3xl font-extrabold">
            {title}
           
          </h2>
          
          <div className="flex justify-between flex-1">
            <div className="text-">Price: ${price}</div>
            <Link to={`/serviceDetails/${_id}`}>
            <button><FaArrowCircleRight className="w-6 h-6" /></button>
            </Link>
            {/* <div className=""><FaArrowCircleRight className="w-6 h-6" /></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
