import { useEffect, useState } from 'react'
import Contact from './Contact'

const contactInfo = [
    {
        id: 1,
        name: 'Emmanuel',
        mail: "emmanuel@email.com",
        tel: "23423434",
        isDeletable: true,
        isDeleted: false
    },
    {
        id: 2,
        name: 'Johana',
        mail: "johana@ElementInternals.com",
        tel: "6764563456",
        isDeletable: true,
        isDeleted: false
    },
    {
        id: 3,
        name: 'Lucas',
        mail: "lucas@email.com",
        tel: "12125465",
        isDeletable: false,
        isDeleted: false
    },
    {
        id: 4,
        name: 'Marie',
        mail: "marie@rm.com",
        tel: "12125465",
        isDeletable: true,
        isDeleted: false
    },
    {
        id: 5,
        name: 'Pedro',
        mail: "pedro@rn.com",
        tel: "34634571234",
        isDeletable: true,
        isDeleted: false
    },
]

function ContactInfo(){
    const [updated, setUpdated] = useState(false)
    const removeComponent = (target) => {
        /* contactInfo[target].isDeleted = true
        setUpdated(!updated) */
        console.log(`phone : ${target}`)
    }
    
    return (
        <div>
            {
                contactInfo.filter(contact => contact.isDeleted === false).map((contact, index) => (
                    <Contact
                        key={index}
                        removeComponent={removeComponent}
                        contact={contact}
                    />
                ))
            }    
        </div>
    )
}

export default ContactInfo