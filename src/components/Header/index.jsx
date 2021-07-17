// icons
import MenuIcon from '../../assets/menu.svg';
import CloseIcon from '../../assets/close.svg';
import LogoResposiveIcon from '../../assets/rchlo.svg';
import LogoIcon from '../../assets/riachuelo.svg';

//components
import Menu from "../Menu";
import Search from "../Search"
import { Link } from "react-router-dom"

import {
   Header as Head
} from "./styles"

function Header() {
    return (
        <Head>
            <div className="header__container">
                
                <div className="header__mobile">
                    <div className="header__drawer menu header__drawer--active">
                        <img className="menu__img" src={MenuIcon} alt="menu" />
                        <p className="menu__title">menu</p>
                    </div>
                    <div className="header__drawer close">
                        <img src={CloseIcon} alt="fechar menu" />
                        <p className="close__title">fechar</p>
                    </div>
                    <Link className="header__logo" to="/"> 
                        <img className="header__img" src={LogoResposiveIcon} alt="Logo" />
                    </Link>
                </div>

                <Link className="header__desktop" to="/">
                    <h1 className="header__logo">
                        <img className="header__img" src={LogoIcon} alt="Logo" />
                    </h1>
                </Link>

                <Search />

                <Menu />
            </div>
        </Head>
    );
}

export default Header;