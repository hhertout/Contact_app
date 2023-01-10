import { useState } from "react";

function Delete({id, deleteTarget}) {
    const [ status, setStatus ] = useState('')
  const deleteElement = (e) => {
    e.preventDefault();
    deleteTarget(id);
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
