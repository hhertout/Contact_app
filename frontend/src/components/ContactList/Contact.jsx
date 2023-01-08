import { Link} from "react-router-dom";
import Delete from "../Delete";
import PhoneIcon from "../icon/PhoneIcon";

function Contact({ contact }) {
  const route = `http://localhost:3000/api/contacts/${contact._id}`;

  return (
    <div className="container grid grid-cols-2 gap-2 mx-auto p-2">
      <ul className="my-3 flex flex-col justify-start align-center">
        <li className="font-bold">{contact.name}</li>
        <li className="font-thin text-sm">{contact.tel}</li>
      </ul>
      <div className="flex justify-center items-center">
        <a href={`tel:${contact.tel}`} className="text-center mx-2 bg-green shadow-lg text-white p-3 rounded flex justify-center items-center">
          <PhoneIcon /><span className="mx-2">Appeler</span>
        </a>
        <Link
          to={`/repertoire/${contact._id}`}
          className="text-center mx-2 bg-dark-blue shadow-lg text-white p-3 rounded"
        >
          Voir
        </Link>
        <Link
          to={`/repertoire/modifier/${contact._id}`}
          className="text-center mx-2 bg-dark-blue shadow-lg text-white p-3 rounded"
        >
          Modifier
        </Link>

        <Delete route={route} />
      </div>
    </div>
  );
}

export default Contact;
