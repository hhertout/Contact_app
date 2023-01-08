import { Link, useParams } from "react-router-dom";
import Delete from "../Delete";

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
          to={`/repertoire/${contact._id}`}
          className="w-40 text-center mx-2 bg-dark-blue shadow-lg text-white p-3 rounded"
        >
          Voir
        </Link>
        <Link
          to={`/repertoire/modifier/${contact._id}`}
          className="w-40 text-center mx-2 bg-dark-blue shadow-lg text-white p-3 rounded"
        >
          Modifier
        </Link>

        <Delete contactId={contact._id}/>
      </div>
    </div>
  );
}

export default Contact;
