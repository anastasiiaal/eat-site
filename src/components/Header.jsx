import logoImg from "/src/assets/logo.svg"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
    const location = useLocation().pathname

    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand" href=".">
                    <img className="logo" src={logoImg} alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link 
                            to="." 
                            className={`nav-link px-4 ${location === "/" ? "active" : ""}`} aria-current="page"
                        >
                            Accueil
                        </Link>
                        <Link 
                            to="carte" 
                            className={`nav-link px-4 ${location === "/carte" ? "active" : ""}`}
                        >
                            La carte
                        </Link>
                        <Link 
                            to="contact" 
                            className={`nav-link px-4 ${location === "/contact" ? "active" : ""}`}
                        >
                            Contact
                        </Link>
                        <Link 
                            to="reservation" 
                            className={`nav-link px-4 ${location === "/reservation" ? "active" : ""}`}
                        >
                            Réserver
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}