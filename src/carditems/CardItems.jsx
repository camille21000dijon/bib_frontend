import './CardItems.css'

const CardItems = (props) => {
  return (
    <div className='card-container'>
        <img alt={props.oeuvre.titre} className = 'image' src={props.oeuvre.imageUrl}/>
        <h2>{props.oeuvre.titre}</h2>
        <p>
            {props.oeuvre.auteur} - {props.oeuvre.annee} 
        </p>




    </div>
  )
}

export default CardItems