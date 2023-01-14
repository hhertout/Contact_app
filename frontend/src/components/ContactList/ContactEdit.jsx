import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContactForm from "./ContactForm";

const contactEdit = async (contactId) => {
  await fetch(`http://localhost:3000/api/contacts/${contactId}`)
      .then(async (res) => {
        const response = res.json();
        return response
      })
      .catch((err) => console.error(err));
}

function ContactEdit() {
  const { contactId } = useParams();
  const [contact, setContact] = useState('');

  return <div>
    <ContactForm contactId={contactId} contact={contact} method={'PUT'} />
  </div>;
}

export default ContactEdit;
