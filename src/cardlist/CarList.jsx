import CardItems from "../carditems/CardItems"
import './CardList.css'

const CarList = (props) => {
    return (
        <div>
            {props.oeuvres.map(o =>


                <CardItems key={o.id} oeuvre={o} />

            )}
        </div>
    )
}

export default CarList