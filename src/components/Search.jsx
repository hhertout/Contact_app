import { useState } from "react";

function Search({ labelName, searchByName, searchByPhone }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    searchByName ? searchByName(search) : null;
    searchByPhone ? searchByPhone(search) : null;
  };

  return (
    <>
      <label htmlFor="search">Rechercher par {labelName}</label>
      <input id="search" onChange={handleChange}></input>
    </>
  );
}

export default Search;
