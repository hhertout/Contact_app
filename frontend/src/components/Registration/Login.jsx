import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  console.log(mail);
  console.log(password);

  return (
    <div className="container max-w-prose mt-5">
      <div className="text-2xl mt-1">Se connecter</div>
      <form action="" className="flex flex-col">
        <label htmlFor="">Adresse Mail</label>
        <input
          onChange={(e) => setMail(e.target.value)}
          value={mail}
          type="text"
          className="border-2 border-dark-blue p-1 my-1 shadow-lg rounded"
        />

        <label htmlFor="">Mot de passe</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="border-2 border-dark-blue p-1 my-1 shadow-lg rounded"
        />

        <button id="submit" className="my-3 p-3 bg-blue rounded">
          Connexion
        </button>
      </form>
      <p>
        Pas encore de compte ?{" "}
        <Link to="/inscription" className="underline">
          Créer un compte
        </Link>
      </p>
    </div>
  );
}

export default Login;
