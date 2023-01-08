import { Link, useParams } from "react-router-dom";

function Contact({ contact, hide }) {
  const isHidden = () => {
    hide(contact.id);
  };

  return (
    <div className="container grid grid-cols-2 gap-2 mx-auto p-2">
      <ul className="my-3">
        <li className="font-bold">{contact.name}</li>
        <li>{contact.mail}</li>
        <li>{contact.tel}</li>
      </ul>
      <div className="flex justify-center items-center">
        <Link
          to={`/repertoire/${contact.name}`}
          className="w-40 text-center mx-2 bg-dark-blue shadow-lg text-white p-3 rounded"
        >
          Voir
        </Link>
        <Link
          to={`/repertoire/edit/${contact.name}`}
          className="w-40 text-center mx-2 bg-dark-blue shadow-lg text-white p-3 rounded"
        >
          Modifier
        </Link>
        <Link
          to={`/repertoire/delete/${contact.name}`}
          className="w-40 text-center mx-2 bg-red shadow-lg text-white p-3 rounded"
        >
          Supprimer
        </Link>
      </div>
    </div>
  );
}

export default Contact;
