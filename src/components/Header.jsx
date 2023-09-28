import logoImg from "/src/assets/logo.svg"

export default function Header() {
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
                        <a className="nav-link px-4 active" aria-current="page" href=".">Accueil</a>
                        <a className="nav-link px-4" href=".">La carte</a>
                        <a className="nav-link px-4" href=".">Contact</a>
                        <a className="nav-link px-4" href=".">Réserver</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}