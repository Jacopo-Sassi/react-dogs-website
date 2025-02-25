function Card(props){
    return(
        <div className="card">
            <div className="image-wrap">
                <img className="card-image" src={props.immagine} alt="Immagine del cane" ></img>
            </div>
            <div className="card-testo">
                <h1>{props.title}</h1>
                <p>{props.descrizione}</p>
            </div>
        </div>
    )
}

export default Card;