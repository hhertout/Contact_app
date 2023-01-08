import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContactForm from "./ContactForm";

function ContactEdit() {
  const { contactId } = useParams();
  const [contact, setContact] = useState('');
  useEffect(() => {
    fetch(`http://localhost:3000/api/contacts/${contactId}`)
      .then(async (res) => {
        const response = await res.json();
        setContact(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return <div>
    <ContactForm contactId={contactId} contact={contact} method={'PUT'} />
  </div>;
}

export default ContactEdit;
