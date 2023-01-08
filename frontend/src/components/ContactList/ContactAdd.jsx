import ContactForm from "./ContactForm"

function ContactAdd(){
    return (
        <div className="container">
        <h1 className="text-xl font-bold">Ajouter un contact</h1>
        <ContactForm method={'POST'}/>
        </div>
    )
}

export default ContactAdd