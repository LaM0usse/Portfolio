export default function Header() {
    return(
        <header id="home" className="scrolled">
            <nav>
                <a href="#home" ><img className="logo" src="./assets/images/photoprofil.png" alt="photoprofil"></img></a>
                <div id="nav-link">
                    <a href="#home" className="link-text home">{'//'} home</a>
                    <a href="#about" className="link-text">{'//'} a propos</a>
                    <a href="#skills" className="link-text">{'//'} competences</a>
                    <a href="#project" className="link-text">{'//'} projets</a>
                </div>
                </nav>

                <div id="presentation">
                    <h1 className="titre-prenom">Sarah</h1>
                    <h2 className="titre-prenom">Drouet</h2>
                    <h3>Développeuse Web</h3>
                    <p className="presentation-text">Agée de 21 ans je suis passionnée par le développement web et le monde de la technologie.</p>
                    <a href="https://cvdesignr.com/p/64e8fe7f13eb9" target="_blanck" className="cv">Télécharger mon CV</a>
                    <a href="#about" className="mouse-toggle"><i className="fa-solid fa-circle"></i></a>
                </div>
                
        </header>
    )
}