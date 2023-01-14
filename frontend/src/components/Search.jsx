import { useEffect } from "react";
import { useState } from "react";

function Search({ labelName, searchByName, searchByPhone }) {
  const [search, setSearch] = useState("")

  const MAX_LENGHT = 20

  const handleChange = (e) => {
    if (e.target.value.length < MAX_LENGHT){
      setSearch(e.target.value)
    }
  }

  useEffect(() => {
    if(searchByName) {
      searchByName(search)
    }
    if(searchByPhone) {
      searchByPhone(search)
    }
  }, [search])

  return (
    <div className="m-2 flex flex-col">
      <label htmlFor="search">🔎 Rechercher par {labelName} :</label>
      <input className={"border-dark-blue border-2 p-1 my-1 shadow-lg rounded"} id="search" onChange={handleChange} value={search}></input>
    </div>
  )
}

export default Search;
