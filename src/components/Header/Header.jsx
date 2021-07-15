import { useContext } from "react";

// contexts
import FilterContext from "../../contexts/FilterContext";

//components
import Menu from "../Menu";
import { Link } from "react-router-dom"

import {
   Header as Head
} from "./styles"

function Header() {

    const { setFilter } = useContext(FilterContext);

    return (
        <Head>
            <div className="header__container">
                
                <div className="header__mobile">
                    <div className="header__drawer menu header__drawer--active">
                        <img className="menu__img" src="assets/menu.svg" alt="menu" />
                        <p className="menu__title">menu</p>
                    </div>
                    <div className="header__drawer close">
                        <img src="assets/close.svg" alt="fechar menu" />
                        <p className="close__title">fechar</p>
                    </div>
                    <Link className="header__logo" to="/"> 
                        <img className="header__img" src="assets/rchlo.svg" alt="Logo" />
                    </Link>
                </div>

                <Link className="header__desktop" to="/">
                    <h1 className="header__logo">
                        <img className="header__img" src="assets/riachuelo.svg" alt="Logo" />
                    </h1>
                </Link>

                <div className="header__search">
                    <img className="header__icon" src="assets/search.svg" alt="lupa" />
                    <input className="header__input" type="search" placeholder="O que você está procurando?"
                        onChange={(event) => setFilter(event.target.value)}
                    />
                </div>

                <Menu />
            </div>
        </Head>
    );
}

export default Header;