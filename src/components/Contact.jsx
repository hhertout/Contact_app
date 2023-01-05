import { useState } from "react";

function Contact({ contact, removeComponent }) {

  const onPressDelete = () => {
    removeComponent(contact.id);
  };
 
  return (
    <div className="person-item">
      <ul className="person-contact">
        <li>{contact.name}</li>
        <li>{contact.mail}</li>
        <li>{contact.tel}</li>
      </ul>
      {contact.isDeletable ? (
        <div className="deleteCol">
          <button onClick={onPressDelete}>Supprimer</button>
        </div>
      ) : (
        <div className="deleteCol"></div>
      )}
    </div>
  );
}

export default Contact;
