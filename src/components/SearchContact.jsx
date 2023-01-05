import { useState } from "react";
import ContactInfo from "./ContactInfo";

function SearchContact() {
  const [searchName, setSearchName] = useState("");

  const handleChange = (e) => {
      setSearchName(searchName => searchName = e.target.value);
    };

  return (
    <>
        <form action="">
            <label htmlFor="searchName">
                <input id="searchName" value={searchName} onChange={handleChange}></input>
            </label>
            <ContactInfo search={searchName} />
        </form>
    </>
  );
}

export default SearchContact;
