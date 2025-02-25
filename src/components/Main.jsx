import Card from './Card';
function Main () {
    return(
        <div className="Main">
            <div className="main-content">
                <h1 className="testo-main">Razze Popolari</h1>
                <div className="contenitore-card">
                    <Card immagine = "./public/golden.jpg" title="Golden Retriever" descrizione = "Friendly and intelligent family dogs known for their golden coat." />
                    <Card immagine = "./public/pastore.jpg" title="German Shepherd" descrizione = "Loyal and protective working dogs with strong intelligence." />
                    <Card immagine = "./public/cane3.jpg" title="Labrador Retriever" descrizione = "Outgoing and high-spirited companions, great with families" />
                </div>
            </div>
        </div>
    )
}
export default Main;