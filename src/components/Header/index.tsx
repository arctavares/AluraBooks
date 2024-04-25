import { useState } from "react";

export default function Header() {

    const [menuState, setMenuState] = useState(false);

    return (
        <>
            <header className="headerContainer">
                <div className="menu_container">
                    <img src={!menuState ? "src/images/Menu.svg" : "src/images/menu_aberto.svg"} alt="Menu" onClick={() => setMenuState(!menuState)} className={ menuState ? 'menuChecked' : ''}/>
                    {
                        menuState ? (
                            <ul className="menuOptionsContainer">
                            <li className="categories_title">Categorias</li>
                            <li className="categories_item"><a href="#" className="categories_link">PROGRAMAÇÃO</a></li>
                            <li className="categories_item"><a href="#" className="categories_link">FRONTEND</a></li>
                            <li className="categories_item"><a href="#" className="categories_link">INFRAESTRUTURA</a></li>
                            <li className="categories_item"><a href="#" className="categories_link">BUSINESS</a></li>
                            <li className="categories_item"><a href="#" className="categories_link">DESIGN & UX</a></li>
                        </ul>
                        ) : ''
                    }                   
                    <img src="src/images/Logo.svg" alt="Logo" />
                </div>
                <div className="icons_container">
                    <a href="#"><img src="src/images/Favoritos.svg" alt="Favoritos" /></a>
                    <a href="#"><img src="src/images/Compras.svg" alt="Compras" /></a>
                    <a href="#"><img src="src/images/Usuário.svg" alt="Usuario" /></a>
                </div>
            </header>
        </>
    )
}