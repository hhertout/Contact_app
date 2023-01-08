import { useState } from "react";

function Delete({contactId}) {
    const [ status, setStatus ] = useState('')
  const deleteElement = (e) => {
    e.preventDefault();
    const init = {
      method: "DELETE",
    };
    const route = `http://localhost:3000/api/contacts/${contactId}`;
    fetch(route, init).then((res) => {
      window.location.href = "/repertoire";
    });
  };
  return (
    <>
      <form onClick={deleteElement}>
        <button
          id="submit"
          className="w-40 text-center mx-2 bg-red shadow-lg text-white p-3 rounded"
        >
          Supprimer
        </button>
      </form>
    </>
  );
}

export default Delete;
