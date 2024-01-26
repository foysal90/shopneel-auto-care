import { useEffect, useRef, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const searchItem = searchRef.current.value;
    console.log(searchItem);
    setSearch(searchItem);
  };
  
  const filter = asc ? "asc" : "desc"
  useEffect(() => {
    //fetch("https://shopneed-auto-care.vercel.app/services")
    fetch(
      `https://shopneed-auto-care.vercel.app/services?search=${search}&sort=${filter}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, [search, filter]);
  return (
    <div className="mt-8">
      <div className="flex justify-center my-10 ">
        <div className="">
          <input
            className="input input-bordered px-10 hover:px-40"
            type="text"
            ref={searchRef}
            onChange={handleSearch}
            placeholder="Search"
          />
        </div>

        <div>
          <button onClick={handleSearch} className="btn btn-primary hover:bg-blue-800 ">
            Search
          </button>
        </div>
      </div>
      {/* search ends here */}
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

        <button className="btn btn-primary mt-5" onClick={() => setAsc(!asc)}>
          {asc ? "Price: High to low" : "Price: Low to High"}
        </button>
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
