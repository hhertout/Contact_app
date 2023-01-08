import { useState } from "react";
import { Link} from "react-router-dom";
import Contact from "./Contact";
import Search from "../Search";
import BookIcon from "../icon/BookIcon";

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
        <BookIcon />
        <h1 className="text-4xl font-bold">Ma liste de contact</h1>
      </div>
      <div className="flex justify-evenly items-center">
        <Link to="/repertoire/ajouter" className="text-center mx-2 bg-dark-blue shadow-lg text-white p-3 rounded">Ajouter un contact</Link>
        <div className="d-flex">
          <Search labelName="Nom" searchByName={searchByName} />
          <Search labelName="Téléphone" searchByPhone={searchByPhone} />
        </div>
      </div>
      <div className="mt-7">
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
