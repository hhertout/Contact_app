import { useEffect, useState } from 'react'
import Contact from './Contact'
//import {contactData} from '../../data/contact'
import contactData from '../../data/contacts.json'

function ContactList({search}){
    const [visible, setVisible] = useState(true)
    const hide = (target) => {
        contactData[target].isVisible = false
        setVisible(!visible)
    }
    
    return (
        <div>
            { contactData
                .filter(contact => contact.isVisible === true && contact.name.includes(search))
                .map((contact, index) => (
                        <Contact
                            key={index}
                            hide={hide}
                            contact={contact}
                        />
            ))}
        </div>
    )
}

export default ContactList