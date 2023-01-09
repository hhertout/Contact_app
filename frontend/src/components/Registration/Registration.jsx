function Registration() {
  return (
    <div className="container max-w-prose">
      <div className="text-2xl mt-5">S'inscrire</div>
      <form className="flex flex-col mt-1">
        <label htmlFor="lastname">Nom</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          className="border-2 border-dark-blue p-1 my-1 shadow-lg rounded"
        />

        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          className="border-2 border-dark-blue p-1 my-1 shadow-lg rounded"
        />

        <label htmlFor="mail">Mail</label>
        <input
          type="mail"
          name="mail"
          id="mail"
          className="border-2 border-dark-blue p-1 my-1 shadow-lg rounded"
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          id="password"
          className="border-2 border-dark-blue p-1 my-1 shadow-lg rounded"
        />

        <label htmlFor="confirm-password">Confirmer votre mot de passe</label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          className="border-2 border-dark-blue p-1 my-1 shadow-lg rounded"
        />

        <button id="submit" className="my-3 p-3 bg-blue rounded">
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default Registration;
