export default function Banner () {
    return (
        <>
            <div className="bannerContainer">
                <div><h1 className="bannerTitle">Já sabe por onde começar?</h1></div>
                <div className="bannerText"><h2>Encontre em nossa estante o que precisa para seu desenvolvimento!</h2></div>
                <div className="searchContainer">
                    <img src="src/images/Lupa.svg" alt="Search" />
                    <input type="search" className="searchInput" placeholder="Qual será sua próxima leitura?" />
                </div>
            </div>
        </>
    )
}