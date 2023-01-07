import { useState } from "react";
import ContactList from "./ContactList";

function SearchContact() {
  const [searchName, setSearchName] = useState("");

  const handleChange = (e) => {
      setSearchName(e.target.value);
    };

  return (
    <>
            <label htmlFor="searchName">Rechercher</label>
            <input id="searchName" value={searchName} onChange={handleChange}></input>
            
            <ContactList search={searchName} />
            
    </>
  );
}

export default SearchContact;
