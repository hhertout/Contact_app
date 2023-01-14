import { useState } from "react"

const postContact = async (name, mail, tel) => {
  const init = {
    headers: {
      "Content-Type": "application/json",
    },
    method: 'POST',
    body: JSON.stringify({
      name: name,
      mail: mail,
      tel: tel,
    }),
  }
  const route = "http://localhost:3000/api/contacts"
  await fetch(route, init).then((res) => {
    window.location.href = "/repertoire";
  });
}

const updateContact = async (contactId, name, mail, tel) => {
  const init = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify({
      name: name,
      mail: mail,
      tel: tel,
    }),
  }
  const route = `http://localhost:3000/api/contacts/${contactId}`

  await fetch(route, init).then((res) => {
    window.location.href = "/repertoire";
  })
}

function ContactForm({ method, contactId, contact }) {
  const [name, setName] = useState(contact ? contact.name : "")
  const [mail, setMail] = useState(contact ? contact.mail : "")
  const [tel, setTel] = useState(contact ? contact.tel : "")

  const nameHandleChange = (e) => {
    setName(e.target.value);
  };
  const mailHandleChange = (e) => {
    setMail(e.target.value);
  };
  const telHandleChange = (e) => {
    setTel(e.target.value);
  };
  const postData = (e) => {
    e.preventDefault();

    if (method === "POST") {
      postContact(name, mail, tel);
    }

    if (method === "PUT") {
      updateContact(contactId, name, mail, tel);
    }
  };

  return (
    <div className="container my-10">
      <form
        onSubmit={postData}
        className="flex flex-col justify-start items-start"
      >
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
          value={tel}
          className="border-2 border-dark-blue p-1 m-1 shadow-lg rounded"
        />

        <button id="submit" className="my-3 p-3 bg-blue rounded">
          {method === "PUT" ? "Modifier" : "Créer"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm
