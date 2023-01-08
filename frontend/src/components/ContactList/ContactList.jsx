import { useEffect, useState } from "react";
import Contact from "./Contact";
import Search from "../Search";

let contactData = {}
const res = await fetch('http://localhost:3000/api/contacts')
contactData = await res.json()

function ContactList() {
  const [visible, setVisible] = useState(true);
  const [searchName, setSearchName] = useState("");
  const [searchPhone, setSearchPhone] = useState("");
  const searchByName = (value) => {
    setSearchName(value);
  };
  const searchByPhone = (value) => {
    setSearchPhone(value);
  };
  const hide = (target) => {
    contactData[target].isVisible = false;
    setVisible(!visible);
  };

  return (
    <div>
      <div className="flex items-center justify-center p-2 m-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-3" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
        <h1 className="text-4xl font-bold">Ma liste de contact</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Search labelName="Nom" searchByName={searchByName} />
        <Search labelName="Téléphone" searchByPhone={searchByPhone} />
      </div>
      <div>
        {contactData
          .filter(
            (contact) =>
              contact.name.includes(searchName) &&
              contact.tel.includes(searchPhone)
          )
          .map((contact, index) => (
            <Contact key={index} hide={hide} contact={contact} />
          ))}
      </div>
    </div>
  );
}

export default ContactList;
