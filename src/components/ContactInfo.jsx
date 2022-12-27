import Contact from './Contact'

const contactInfo = [
    {
        name: 'Emmanuel',
        mail: "emmanuel@email.com",
        tel: "23423434",
        isDeletable: true
    },
    {
        name: 'Johana',
        mail: "johana@ElementInternals.com",
        tel: "6764563456",
        isDeletable: true
    },
    {
        name: 'Lucas',
        mail: "lucas@email.com",
        tel: "12125465",
        isDeletable: false
    },
    {
        name: 'Marie',
        mail: "marie@rm.com",
        tel: "12125465",
        isDeletable: true
    },
    {
        name: 'Pedro',
        mail: "pedro@rn.com",
        tel: "34634571234",
        isDeletable: true
    },
]

function ContactInfo(){
    
    return (
        <div>
            {
                contactInfo.map((contact, index) => (
                    <Contact
                        key={index}
                        name={contact.name}
                        mail={contact.mail}
                        tel={contact.tel}
                        isDeletable={contact.isDeletable}
                    />
                ))
            }    
        </div>
    )
}

export default ContactInfo