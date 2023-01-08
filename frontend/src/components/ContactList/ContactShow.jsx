import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Contact from "./Contact";

function ContactShow() {
  const { contactId } = useParams();
  const [contact, setContact] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/api/contacts/${contactId}`)
      .then(async (res) => {
        const response = await res.json();
        setContact(response)
      })
      .catch((err) => console.error(err));
  }, []);

  return <div>
    {contact !== null ? <ul>
        <li>{contact.name}</li>
        <li>{contact.mail}</li>
        <li>{contact.tel}</li>
    </ul> : null}
  </div>;
}

export default ContactShow;
