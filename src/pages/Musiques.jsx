import CarList from "../cardlist/CarList"
import './Oeuvres.css'


let MUSIQUES = [
  {
    id : 1,
    auteur : "Daft Punk",
    annee : "2013",
    titre : "Get Luck",
    imageUrl : "https://img.cdandlp.com/2013/07/imgL/116117291.jpg",
  },
  {
    id : 2,
    auteur : "David Ghetta",
    annee : "2011",
    titre : "Titanium",
    imageUrl : "https://m.media-amazon.com/images/I/712qBwjag-L._SS500_.jpg",
  },
  {
    id : 3,
    auteur : "Shaka Ponk",
    annee : "2019",
    titre : "Ok",
    imageUrl : "https://m.media-amazon.com/images/I/A1wL5ptvt8L._AC_SS130_.jpg",
  },
  {
    id : 4,
    auteur : "Shaka Ponk",
    annee : "2010",
    titre : "The Geeks",
    imageUrl : "https://m.media-amazon.com/images/I/61i+gs3o1YL._AC_SS130_.jpg",
  },




]

const Musiques = () => {
  return (
    <div>Musiques
    <CarList oeuvres={MUSIQUES}/>


    </div>
  )
}

export default Musiques