import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div className="mt-8">
      <div className=" text-center">
        <h1 className="text-3xl text-orange-600 ">Services</h1>
        <h2 className="text-3xl font-extrabold text-blue-800 ">
          Our Services Area
        </h2>
        <p className="text-2xl ">
          the majority have suffered alteration in some form, by injected
          humour, <br /> or randomised words which do not look even slightly
          believable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, idx) => (
          <Service key={idx} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
