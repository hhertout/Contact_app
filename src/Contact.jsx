function Contact(props){
    return (
    <div className="person-item">
        <ul className='person-contact'>
          <li>{props.name}</li>
          <li>{props.mail}</li>
          <li>{props.tel}</li>
        </ul>
        <div>
          <button>Supprimer</button>
        </div>
    </div>
    )
}

export default Contact