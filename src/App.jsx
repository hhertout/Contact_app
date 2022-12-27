import './App.css'
import Contact from './Contact'

function App() {
  
  return (
    <>
      <h1 className='title'>Ma liste de contact !</h1>
      <div className="App">
        <Contact name="Emmanuel" mail="emmanuel@email.com" tel="23423434"></Contact>
        <Contact name="Johana" mail="johana@ElementInternals.com" tel="6764563456"></Contact>
        <Contact name="Lucas" mail="lucas@email.com" tel="12125465"></Contact>
        <Contact name="Marie" mail="marie@rm.com" tel="12125465"></Contact>
        <Contact name="Pedro" mail="pedro@rn.com" tel="34634571234"></Contact>
      </div>
    </>
  )
}

export default App
