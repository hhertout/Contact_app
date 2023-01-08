import ContactList from "./ContactList"
import ContactForm from "./ContactForm"


function Book() {
    return <>
        <ContactList />
        <ContactForm  method={"POST"}/>
    </>
}

export default Book