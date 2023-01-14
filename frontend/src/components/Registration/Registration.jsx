import { useState } from "react";

function Registration() {
  const [firstname, setFirstame] = useState('')
  const [lastname, setLastname] = useState('')
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    if (password === confirmedPassword) {
      console.log('ok')
    }
  }
  const handleFirstnameChange = (e) => {
    setFirstame(e.target.value)
  }
  const handleLastnameChange = (e) => {
    setLastname(e.target.value)
  }
  const handleMailChange = (e) => {
    setMail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleConfirmedPassWordChange = (e) => {
    setConfirmedPassword(e.target.value)
  }

  return (
    <div className="container max-w-prose">
      <div className="text-2xl mt-5">S'inscrire</div>
      <form onSubmit={handleRegister} className="flex flex-col mt-1">
        <label htmlFor="lastname">Nom</label>
        <input
        value={lastname}
        onChange={handleLastnameChange}
          type="text"
          name="lastname"
          id="lastname"
          className="border-2 border-dark-blue p-1 my-1 shadow-lg rounded"
          required
        />

        <label htmlFor="firstname">Prénom</label>
        <input
          value={firstname}
          onChange={handleFirstnameChange}
          type="text"
          name="firstname"
          id="firstname"
          className="border-2 border-dark-blue p-1 my-1 shadow-lg rounded"
          required
        />

        <label htmlFor="mail">Mail</label>
        <input
        value={mail}
        onChange={handleMailChange}
          type="mail"
          name="mail"
          id="mail"
          className="border-2 border-dark-blue p-1 my-1 shadow-lg rounded"
          required
        />

        <label htmlFor="password">Mot de passe</label>
        <input
        value={password}
        onChange={handlePasswordChange}
          type="password"
          name="password"
          id="password"
          className="border-2 border-dark-blue p-1 my-1 shadow-lg rounded"
          required
        />

        <label htmlFor="confirm-password">Confirmer votre mot de passe</label>
        <input
        value={confirmedPassword}
        onChange={handleConfirmedPassWordChange}
          type="password"
          name="confirm-password"
          id="confirm-password"
          className="border-2 border-dark-blue p-1 my-1 shadow-lg rounded"
          required
        />
        <div className="text-red mt-1">{password !== confirmedPassword ? '⚠️ Les mots de passe sont différents' : ''}</div>

        <button id="submit" className="my-3 p-3 bg-blue rounded">
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default Registration;
