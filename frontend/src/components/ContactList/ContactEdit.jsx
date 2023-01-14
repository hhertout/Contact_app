import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ContactForm from "./ContactForm"

function ContactEdit() {
  const { contactId } = useParams()
  const [contact, setContact] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/api/contacts/${contactId}`)
      .then(res => res.data)
      .then(data => {
        setContact(data)
      })
  }, [])

  return <div>
    <ContactForm contactId={contactId} contact={contact} method={'PUT'} />
  </div>;
}

export default ContactEdit;
