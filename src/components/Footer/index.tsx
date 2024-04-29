export default function Footer () {
    return (
        <>
            <hr />
            <footer className="footerContainer">
                
            <h1 className="footer_title">Grupo Alura</h1>
            <div className="footerText">
                <h1>Project Alura Books</h1>
                <p>This project was developed to exercise responsiveness skills. Initially implemented solely using <span className="skillsFooterText">CSS</span> and <span className="skillsFooterText">HTML</span>, I opted to integrate <span className="skillsFooterText">SCSS</span> and <span className="skillsFooterText">React</span> as well. </p>
                <p>Completion date: April 29, 2024.</p>
                <p className="footerTextName">Armando Tavares</p>
            </div>
            <ul className="footer_list">
            <li className="footer_list_title">Educação</li>
            <li className="footer_list__item">
                <img src="src/images/CasaDoCodigo.svg" alt="Logo da casa do código" />
                <a href="#" className="footer_list__link">Casa do código</a>
            </li>
            <li className="footer_list__item">
                <img src="src/images/Caelum.svg" alt="Logo da caelum" />
                <a href="#" className="footer_list__link">Caelum</a>
            </li>
        </ul>

        <ul className="footer_list">
            <li className="footer_list_title">Educação online</li>
            <li className="footer_list__item">
                <img src="src/images/Alura.svg" alt="Logo da Alura" />
                <a href="#" className="footer_list__link">Alura</a>
            </li>
            <li className="footer_list__item">
                <img src="src/images/AluraEmpresas.svg" alt="Logo da Alura para Empresas"/>
                <a href="#" className="footer_list__link">Alura para Empresas</a>
            </li>
            <li className="footer_list__item">
                <img src="src/images/AluraLATAM.svg" alt="Logo da Alura Latam"/>
                <a href="#" className="footer_list__link">Alura LATAM</a>
            </li>
            <li className="footer_list__item">
                <img src="src/images/AluraStart.svg" alt="Logo da Alura START"/>
                <a href="#" className="footer_list__link">Alura Start</a>
            </li>
            <li className="footer_list__item">
                <img src="src/images/MusicDot.svg" alt="Logo da Music Dot"/>
                <a href="#" className="footer_list__link">Music Dot</a>
            </li>
            <li className="footer_list__item">
                <img src="src/images/AluraLingua.svg" alt="Logo da Alura Lingua"/>
                <a href="#" className="footer_list__link">Alura Lingua</a>
            </li>
            <li className="footer_list__item">
                <img src="src/images/PM3.svg" alt="Logo da PM3"/>
                <a href="#" className="footer_list__link">PM3</a>
            </li>
        </ul>
        <ul className="footer_list">
        <li className="footer_list_title">Comunidade</li>
        <li className="footer_list__item">
            <img src="src/images/HipstersTech.svg" alt="Logo do Hipsters ponto Tech" />
            <a href="#" className="footer_list__link">Hipsters ponto Tech</a>
        </li>
        <li className="footer_list__item">
            <img src="src/images/ScubaDev.svg" alt="Logo do Scuba Dev"/>
            <a href="#" className="footer_list__link">Scuba Dev</a>
        </li>
        <li className="footer_list__item">
            <img src="src/images/LayersTech.svg" alt="Logo do Layers ponto Tech"/>
            <a href="#" className="footer_list__link">Layers ponto Tech</a>
        </li>
        <li className="footer_list__item">
            <img src="src/images/LikeABoss.svg" alt="Logo do Like a Boss"/>
            <a href="#" className="footer_list__link">Like a Boss</a>
        </li>
        <li className="footer_list__item">
            <img src="src/images/CarreiraSemFronteira.svg" alt="Logo do Carreira sem fronteiras"/>
            <a href="#" className="footer_list__link">Carreira sem fronteiras</a>
        </li>
        <li className="footer_list__item">
            <img src="src/images/HipstersJobs.svg" alt="Logo do Hipsters ponto jobs"/>
            <a href="#" className="footer_list__link">Hipsters ponto jobs</a>
        </li>
        <li className="footer_list__item">
            <img src="src/images/GUJ.svg" alt="Logo do GUJ"/>
            <a href="#" className="footer_list__link">GUJ</a>
        </li>
    </ul>
            </footer>
        </>
    )
}