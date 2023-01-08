
import { useState } from "react"

function ContactForm({method, contactId}){
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [tel, setTel] = useState('')

    const nameHandleChange = (e) => {
        setName(e.target.value)
    }
    const mailHandleChange = (e) => {
        setMail(e.target.value)
    }
    const telHandleChange = (e) => {
        setTel(e.target.value)
    }

    const postData = (e) => {
        e.preventDefault()
        
        if(method === 'POST'){
            const init = {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: method,
                body: JSON.stringify({
                    name: name,
                    mail: mail,
                    tel: tel,
                })
            }
            const route = 'http://localhost:3000/api/contacts'
            fetch(route, init).then((res) => {
                window.location.href = '/repertoire'
            })
        }

        if(method === 'PUT'){
            const init = {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify({
                    name: name,
                    mail: mail,
                    tel: tel,
                })
            }
            const route = `http://localhost:3000/api/contacts/${contactId}`
            fetch(route, init).then((res) => {
            window.location.href = '/repertoire'
        })
        }  
    }
    

    return (
        <div className="container my-10">
            <form onSubmit={postData} className="flex flex-col justify-start items-start">
                <label htmlFor="name">Nom :</label>
                <input 
                    id="name" 
                    type="text" 
                    onChange={nameHandleChange} 
                    value={name} 
                    className="border-2 border-dark-blue p-1 m-1 shadow-lg rounded"
                />

                <label htmlFor="mail">Mail</label>
                <input 
                    id="mail" 
                    type="mail" 
                    onChange={mailHandleChange} 
                    value={mail} 
                    className="border-2 border-dark-blue p-1 m-1 shadow-lg rounded"
                />
                
                <label htmlFor="tel">Téléphone</label>
                <input 
                    id="tel" 
                    type="text" 
                    onChange={telHandleChange}
                    placeholder={''}
                    value={tel} 
                    className="border-2 border-dark-blue p-1 m-1 shadow-lg rounded"
                />

                <button id="submit" className="my-3 p-3 bg-blue rounded">{method === 'PUT' ? 'Modifier' : 'Créer'}</button>
            </form>
        </div>
    )
}

export default ContactForm