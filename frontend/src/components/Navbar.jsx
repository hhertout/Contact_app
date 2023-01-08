import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
            <Link to="/repertoire">Mes Contacts</Link>
            <Link to="/connexion">Connexion</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
