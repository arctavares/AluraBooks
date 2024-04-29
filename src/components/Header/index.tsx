import { useState } from "react";

export default function Header() {

    const [menuState, setMenuState] = useState(false);
    const [categoriesState, setCategoriesState] = useState(false);

    return (
        <>
            <header className="headerContainer">
                <div className="menu_container">
                    <div className={`hamburger_container ${menuState && 'hamburger_container_checked'}`}>
                        <img src={!menuState ? "src/images/Menu.svg" : "src/images/menu_aberto.svg"} alt="Menu" onClick={() => setMenuState(!menuState)} className={ menuState ? 'menuChecked' : ''}/>
                    </div>
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
                    <h1 className="headerTitle"><b>Alura</b>Books</h1>
                </div>
                <ul className="options">
                    <li onClick={() => {setCategoriesState(!categoriesState)}} className={ `optionsItem ${categoriesState ? 'categoryChecked' : ''}`}>CATEGORIAS
                        {
                            categoriesState ? (
                                <ul className="menuOptionsContainer">
                                <li className="categories_item"><a href="#" className="categories_link">PROGRAMAÇÃO</a></li>
                                <li className="categories_item"><a href="#" className="categories_link">FRONTEND</a></li>
                                <li className="categories_item"><a href="#" className="categories_link">INFRAESTRUTURA</a></li>
                                <li className="categories_item"><a href="#" className="categories_link">BUSINESS</a></li>
                                <li className="categories_item"><a href="#" className="categories_link">DESIGN & UX</a></li>
                            </ul>
                            ) : ''
                        } 
                    </li> 
                    <li className="optionsItem">FAVORITOS</li>
                    <li className="optionsItem">MINHA ESTANTE</li>
                </ul>
                <div className="icons_container">
                    <a href="#" className="favoriteIcon"><img src="src/images/Favoritos.svg" alt="Favoritos" /></a>
                    <div className="iconContainer">
                        <p className="iconTitle">Minha sacola</p>
                        <a href="#"><img src="src/images/Compras.svg" alt="Compras" /></a>
                    </div>
                    <div className="iconContainer">
                        <p className="iconTitle">Meu perfil</p>
                        <a href="#"><img src="src/images/Usuário.svg" alt="Usuario" /></a>
                    </div>
                </div>
            </header>
        </>
    )
}