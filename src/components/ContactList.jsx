import { useEffect, useState } from 'react'
import Contact from './Contact'
import contactData from '../../data/contacts.json'
import Search from './Search'

function ContactList(){
    const [visible, setVisible] = useState(true)
    const [searchName, setSearchName] = useState("")
    const [searchPhone, setSearchPhone] = useState("")
    const searchByName = (value) => {
        setSearchName(value)  
    }
    const searchByPhone = (value) => {
        setSearchPhone(value)
    }
    const hide = (target) => {
        contactData[target].isVisible = false
        setVisible(!visible)
    }
    
    return (
        <div>
            <div>
                <Search labelName="Nom" searchByName={searchByName}/>
                <Search labelName="Téléphone" searchByPhone={searchByPhone}/>
            </div>
            <div>
            { contactData
                .filter(contact => contact.name.includes(searchName) && contact.tel.includes(searchPhone))
                .map((contact, index) => (
                        <Contact
                            key={index}
                            hide={hide}
                            contact={contact}
                        />
            ))}
            </div>
        </div>
    )
}

export default ContactList