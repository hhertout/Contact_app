import ContactList from "./ContactList"
import ContactForm from "./ContactForm"


function Book() {
    return <>
        <ContactList />
        <ContactForm  action={"Créer"}/>
    </>
}

export default Book