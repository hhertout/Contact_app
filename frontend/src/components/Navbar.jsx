import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-blue mb-7">
        <ul className="flex justify-center items-center font-bold text-2xl">
          <Link to="/" className="p-5 hover:bg-dark-blue">
            <li>Accueil</li>
          </Link>

          <Link to="/repertoire" className="p-5 hover:bg-dark-blue">
            <li>Mes Contacts</li>
          </Link>

          <Link to="/connexion" className="p-5 hover:bg-dark-blue">
            <li>Connexion</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
