import carouselOne from "/src/assets/carousel-1.jpg"
import carouselTwo from "/src/assets/carousel-2.jpg"
import carouselThree from "/src/assets/carousel-3.jpg"
import glasses from "/src/assets/glasses.jpg"
import img1 from "/src/assets/img-1.jpg"
import img2 from "/src/assets/img-2.jpg"
import img3 from "/src/assets/img-3.jpg"
import img4 from "/src/assets/img-4.jpg"
import img5 from "/src/assets/img-5.jpg"
import img6 from "/src/assets/img-6.jpg"
import img7 from "/src/assets/img-7.jpg"
import img8 from "/src/assets/img-8.jpg"

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
                            <a href="." type="button" className="btn btn-warning mb-5 btn-lg">Réserver une table</a>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={carouselTwo} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Estaminet, Aromes et Tentations</h1>
                            <p className="my-4">Patricia & Sébastien vous souhaitent la BIENVENUE !</p>
                            <a href="." type="button" className="btn btn-warning mb-5 btn-lg">Réserver une table</a>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={carouselThree} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Estaminet, Aromes et Tentations</h1>
                            <p className="my-4">On vous attend pour partager un vrai goût provençal</p>
                            <a href="." type="button" className="btn btn-warning mb-5 btn-lg">Réserver une table</a>
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

            <div className="container container-p text-center">
                <div className="row g-16 d-flex align-items-center">
                    <div className="col-6 px-2">
                        <img src={glasses} alt="Verres" className="img-fluid" />
                    </div>
                    <div className="col-6 px-4 text-wrapper text-start">
                        <h2>Notre Restaurant E.A.T. Estaminet, Arômes, Tentations…</h2>
                        <p className="py-4">
                            E.A.T. “Estaminet, Arômes et tentations” est un restaurant proposant une cuisine traditionnelle française revisitée, élaborée par nos soins à base de produits frais et de saison ; nos suggestions sont renouvelées fréquemment.Notre salle à manger de petite taille mais chaleureuse, où se mélange l’ancien et le moderne, intègre une cuisine ouverte.

                            Et pour les beaux jours, une terrasse colorée et fraiche vous accueillera dans une petite rue piétonne, en plein cœur historique et touristique de la belle ville d’Avignon.
                        </p>
                        <a href="." type="button" className="btn btn-warning btn-lg">Voir la carte</a>
                    </div>
                </div>
            </div>

            <section className="craft">
                <div className="container container-p">
                    <h2 className="text-center mb-4">Galerie photo</h2>
                    {/* <div className="image-wrapper"> */}
                        <div className="d-flex gap-4 flex-wrap justify-content-center img-grid-row h">
                            <div className="g-col-4">
                                <img src={img1} alt="" />
                            </div>
                            <div className="g-col-4">
                                <img src={img2} alt="" />
                            </div>
                            <div className="g-col-4">
                                <img src={img3} alt="" />
                            </div>
                        </div>
                        <div className="d-flex gap-4 flex-wrap justify-content-center img-grid-row">
                            <div className="g-col-7">
                                <img src={img4} alt="" />
                            </div>
                            <div className="g-col-5">
                                <img src={img5} alt="" />
                            </div>
                        </div>
                        <div className="d-flex gap-4 flex-wrap justify-content-center img-grid-row">
                            <div className="g-col-3">
                                <img src={img6} alt="" />
                            </div>
                            <div className="g-col-5">
                                <img src={img7} alt="" />
                            </div>
                            <div className="g-col-4">
                                <img src={img8} alt="" />
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </section>
        </>
    )
}