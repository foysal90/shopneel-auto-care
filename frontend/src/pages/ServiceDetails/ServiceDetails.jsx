
import { useEffect, useState } from 'react';


const ServiceDetails = () => {
    const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
   
    
    return (
        <div>
            <h1>service details {services.length}</h1>
        </div>
    );
};

export default ServiceDetails;