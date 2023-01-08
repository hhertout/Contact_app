function Contact({ contact, hide }) {
  const isHidden = () => {
    hide(contact.id);
  };

  return (
    <div className="container grid grid-cols-2 gap-2 mx-auto p-2">
      <ul className="my-3">
        <li>{contact.name}</li>
        <li>{contact.mail}</li>
        <li>{contact.tel}</li>
      </ul>
      <div className="flex justify-center items-center">
        <button onClick={isHidden} className="bg-dark-blue shadow-lg text-white p-3 rounded">
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default Contact;
