import ContactList from "./ContactList"
import ContactForm from "./ContactForm"


function ContactHome() {
    return <>
        <ContactList />
        <ContactForm  method={"POST"}/>
    </>
}

export default ContactHome