import { useEffect, useState } from 'react'
import Contact from './Contact'
import {contactData} from '../../data/contact'

function ContactList({search}){
    const [isVisible, setIsVisible] = useState(true)
    const hide = (target) => {
        setIsVisible(target.isVisible = false)
    }
    console.log(contactData[0].isVisible)
    
    return (
        <div>
            { contactData
                .filter(contact => isVisible === true && contact.name.includes(search))
                .map((contact, index) => (
                        <Contact
                            isVisible={isVisible}
                            key={index}
                            hide={hide}
                            contact={contact}
                        />
            ))}
        </div>
    )
}

export default ContactList