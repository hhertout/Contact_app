import { useState } from "react";
import ContactList from "./ContactList";

function SearchContact() {
  const [searchName, setSearchName] = useState("");

  const handleChange = (e) => {
      e.preventDefault()
      setSearchName(searchName => searchName = e.target.value);
    };

  return (
    <>
        <form action="">
            <label htmlFor="searchName">
                <input id="searchName" value={searchName} onChange={handleChange}></input>
            </label>
            <ContactList search={searchName} />
        </form>
    </>
  );
}

export default SearchContact;
