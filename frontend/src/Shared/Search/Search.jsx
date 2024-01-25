import { useEffect, useRef, useState } from "react";

const Search = () => {
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const [service, setService] = useState([]);
  const handleSearch = () => {
    const searchItem = searchRef.current.value;
    console.log(searchItem);
    setSearch(searchItem);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/services?search=${search}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [search]);
  return (
    <div className="join">
      <div>
        <input
          className="input input-bordered join-item"
          type="text"
          ref={searchRef}
          placeholder="Search"
        />
      </div>

      <div>
        <button onClick={handleSearch} className="btn join-item">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
