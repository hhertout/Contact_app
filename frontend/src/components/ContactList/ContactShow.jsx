import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";

function ContactShow() {
  const [contact, setContact] = useState(null);
  const { contactId } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/api/contacts/${contactId}`)
    .then(res => res.data)
    .then(data => {
      setContact(data)
    })
  },[])

  return <div>
    {contact !== null ? <ul>
        <li>{contact.name}</li>
        <li>{contact.mail}</li>
        <li>{contact.tel}</li>
    </ul> : 'Error, not found'}
  </div>;
}

export default ContactShow;
