import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-blue mb-7">
        <ul className="flex justify-center items-center font-bold text-2xl">
          <li className="p-5 hover:bg-dark-blue">
            <Link to="/">Accueil</Link>
          </li>
          <li className="p-5 hover:bg-dark-blue">
            <Link to="/repertoire">Mes Contacts</Link>
          </li>
          <li className="p-5 hover:bg-dark-blue">
            <Link to="/connexion">Connexion</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
