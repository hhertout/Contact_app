import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [logStatus, setLogStatus] = useState(true)

  const handleMailChange = (e) => {
    setMail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const login = (e) => {
    e.preventDefault()
    console.log(mail, password)
      const init = {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify({
          mail: mail,
          password: password
        }),
      }
      fetch('http://localhost:3000/api/auth/login', init)
      .then(res => {
        if(res.ok){
          window.location.href = "/";
        }
        else {
          setLogStatus(false)
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container max-w-prose mt-5">
      <div className="text-2xl mt-1">Se connecter</div>
      <form onSubmit={login} className="flex flex-col">
        <label htmlFor="mail">Adresse Email</label>
        <input
          onChange={handleMailChange}
          value={mail}
          type="text"
          id="mail"
          className="border-2 border-dark-blue p-1 my-1 shadow-lg rounded"
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          onChange={handlePasswordChange}
          value={password}
          type="password"
          id="password"
          className="border-2 border-dark-blue p-1 my-1 shadow-lg rounded"
          required
        />
        <div className="text-red">{logStatus ? "" : "Nom d'utilisateur ou mot de passe incorrect"}</div>
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
