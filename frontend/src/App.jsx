import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import ContactHome from "./components/ContactList/ContactHome";
import Navbar from "./components/Navbar";
import ContactShow from "./components/ContactList/ContactShow";
import ContactEdit from "./components/ContactList/ContactEdit";
import ContactAdd from "./components/ContactList/ContactAdd";
import Login from "./components/Registration/Login";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/repertoire" element={<ContactHome />} />
        <Route path="/repertoire/:contactId" element={<ContactShow />}/>
        <Route path="/repertoire/modifier/:contactId" element={<ContactEdit />}/>
        <Route path="/repertoire/ajouter" element={<ContactAdd />}/>
        <Route path="/connexion" element={<Login />}/>
        <Route path="/inscription" element={<Registration />}/>

      </Routes>
    </Router>
  );
}

export default App;
