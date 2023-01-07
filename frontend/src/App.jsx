import ContactList from "./components/Home/ContactList";
import ContactForm from "./components/Home/ContactForm";



function App() {
  return (
    <>
        <ContactList />
        <ContactForm  action={"Créer"}/>
    </>
  );
}

export default App;
