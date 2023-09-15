import carouselOne from "/src/assets/carousel-1.jpg"
import carouselTwo from "/src/assets/carousel-2.jpg"
import carouselThree from "/src/assets/carousel-3.jpg"

export default function Accueil() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src={carouselOne} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Estaminet, Aromes et Tentations</h1>
                            <p className="my-4">Une cuisine traditionnelle Française et plus !</p>
                            <button type="button" className="btn btn-warning mb-5 btn-lg">Réserver une table</button>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={carouselTwo} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Estaminet, Aromes et Tentations</h1>
                            <p className="my-4">Patricia & Sébastien vous souhaitent la BIENVENUE !</p>
                            <button type="button" className="btn btn-warning mb-5 btn-lg">Réserver une table</button>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={carouselThree} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Estaminet, Aromes et Tentations</h1>
                            <p className="my-4">On vous attend pour partager un vrai goût provençal</p>
                            <button type="button" className="btn btn-warning mb-5 btn-lg">Réserver une table</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container">
                <h2>hello</h2>
            </div>
        </>
    )
}