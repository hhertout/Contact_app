import { useState } from "react";

function Search({ labelName, searchByName, searchByPhone }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    searchByName ? searchByName(search) : null;
    searchByPhone ? searchByPhone(search) : null;
  };

  return (
    <div className="m-2 flex flex-col">
      <label htmlFor="search">🔎 Rechercher par {labelName} :</label>
      <input className="border-2 border-dark-blue p-1 my-1 shadow-lg rounded" id="search" onChange={handleChange}></input>
    </div>
  );
}

export default Search;
