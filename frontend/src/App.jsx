import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Book from "./components/ContactList/Book";
import Navbar from "./components/Navbar";
import ContactShow from "./components/ContactList/ContactShow";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/repertoire" element={<Book />} />
        <Route path="/repertoire/:contactId" element={<ContactShow />}/>
      </Routes>
    </Router>
  );
}

export default App;
