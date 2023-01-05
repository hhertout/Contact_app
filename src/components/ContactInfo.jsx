import { useEffect, useState } from 'react'
import Contact from './Contact'
import {contactInfo} from '../../data/contact'

function ContactInfo({search}){
    const [updated, setUpdated] = useState(false)
    const removeComponent = (target) => {
        contactInfo[target].isDeleted = true
        setUpdated(!updated)
    }
    
    return (
        <div>
            { contactInfo
                .filter(contact => contact.isDeleted === false && contact.name.includes(search))
                .map((contact, index) => (
                        <Contact
                            key={index}
                            removeComponent={removeComponent}
                            contact={contact}
                        />
            ))}
        </div>
    )
}

export default ContactInfo