import { useState } from "react";

function Delete({route}) {
    const [ status, setStatus ] = useState('')
  const deleteElement = (e) => {
    e.preventDefault();
    const init = {
      method: "DELETE",
    };
    fetch(route, init).then((res) => {
      window.location.href = "/repertoire";
    });
  };
  return (
    <>
      <form onClick={deleteElement}>
        <button
          id="submit"
          className="px-4 text-center mx-2 bg-red shadow-lg text-white p-3 rounded"
        >
          Supprimer
        </button>
      </form>
    </>
  );
}

export default Delete;
