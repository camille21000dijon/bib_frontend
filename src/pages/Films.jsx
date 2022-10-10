import CarList from "../cardlist/CarList"

import './Oeuvres.css'

let FILMS = [
  {
    id : 1,
    auteur : "G. Lucas",
    annee : "2013",
    titre : "Star Wars",
    imageUrl : "https://www.tradeinn.com/f/13921/139214389/star-wars-poster-classic-la-guerra-de-las-galaxias.jpg",
  },
  {
    id : 2,
    auteur : "P. Jackson",
    annee : "2011",
    titre : "LOTR",
    imageUrl : "https://www.closeupshop.fr/media/oart_0/oart_h/oart_92448/thumbs/961564_2758687.jpg",
  },
  {
    id : 3,
    auteur : "S. Spielberg",
    annee : "2019",
    titre : "E.T.",
    imageUrl : "https://i.etsystatic.com/13513569/r/il/9d790d/1116896486/il_1588xN.1116896486_o6q4.jpg",
  },
  {
    id : 4,
    auteur : "E. Cohen",
    annee : "2010",
    titre : "Fargo",
    imageUrl : "https://m.media-amazon.com/images/I/51MwBipC1LL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },




]
const Films = () => {
  return (
    <div>Films

      <CarList oeuvres={FILMS}/>

    </div>
  )
}

export default Films