
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const details = useLoaderData();
    console.log(details)
  const { _id, img, description, price, title, facility } = details;

  return (
    

    <div>
     
        <div className="lg:w-3/4 mx-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="lg:flex justify-between my-10 p-5 sm:text-center w-full">
          <img
            src={img}
            className="lg:w-2/5 rounded-lg  shadow-2xl sm:w-full"
          />
          <div className="w-1/2 ">
            <h1 className="text-xl" >Service Name:  <span className="text-2xl font-bold">{title}</span></h1>
            <p className="py-6">
              Details : {description}
            </p>
           
            <div className="lg:flex justify-between">
            <p className="text-xl font-bold text-red-600">Price: ${price}</p>
            <Link to={`/checkout/${_id}`}>
            <button className="btn btn-success text-white">Book Now</button></Link>
            </div>
          </div>
        </div> 
      </div> 
      <h1 className="text-5xl font-extrabold text-center  ">Facilities</h1>
      <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-1 my-10 text-center text-xl font-extrabold">
        
      <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white   p-5 rounded-xl shadow-2xl" >
      <p >{facility[0].name}</p>
      {/* <p> Details: {facility[0].details}</p> */}
      </div>
      <div className="bg-gradient-to-r from-indigo-500 text-black p-5 rounded-xl shadow-2xl">
      <p>{facility[1].name}</p>
      
      </div>
     <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-5 rounded-xl shadow-2xl"> <p>{facility[2].name}</p>
     
     </div>
     <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white p-5 rounded-xl shadow-2xl"> 
      <p>{facility[3].name}</p>
     {/* <p>{facility[3].details}</p> */}
     </div>

      </div>
    </div>
    
  ); 
};

export default ServiceDetails;
