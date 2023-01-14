import { useState } from "react";
import { Link } from "react-router-dom";
import Delete from "../Delete";
import MoreInfo from "../icon/MoreIcon";
import PhoneIcon from "../icon/PhoneIcon";
import ArrowRight from "../icon/ArrowRight";

const deleteContact = (contactId) => {
  const route = `http://localhost:3000/api/contacts/${contactId}`
  const init = {
    method: "DELETE",
  }
  fetch(route, init).then((res) => {
    window.location.href = "/repertoire";
  })
}

function Contact({ contact }) {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible(isVisible => !isVisible)
  }

  const menuToHide = document.getElementById(`show${contact._id}`)
  if (isVisible) {
    menuToHide ? menuToHide.style = "display: flex" : null
  }
  else {
    menuToHide ? menuToHide.style = "display: none" : null
  }

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
        <button onClick={handleClick} className="text-center mx-2 bg-blue shadow-lg text-white p-3 rounded flex justify-center items-center">
          {isVisible ?  <ArrowRight /> : <MoreInfo />}
          </button>
        <div id={`show${contact._id}`} className="flex">
          <Link to={`/repertoire/${contact._id}`} className="text-center mx-2 bg-dark-blue shadow-lg text-white p-3 rounded">
            Voir
          </Link>
          <Link to={`/repertoire/modifier/${contact._id}`} className="text-center mx-2 bg-dark-blue shadow-lg text-white p-3 rounded">
            Modifier
          </Link>

          <Delete id={contact._id} deleteTarget={deleteContact} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
