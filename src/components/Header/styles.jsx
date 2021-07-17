import styled from "styled-components"

export const Header = styled.header `
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #e0e0e0;

    .header__container {
        margin: auto;
        width: 95%;
        max-width: 1200px;
    }

    .header__mobile {
        display: none;
        margin-bottom: 25px;
    }

    .header__logo {
        height: 70px;
        line-height: 70px;
        text-align: center;
    }

    .header__img {
        height: 25px;
        transform: translateY(10px);
    }

    .header__drawer {
        width: 24px;
        opacity: 54%;
        display: none;
    }

    .header__drawer--active {
        display: block;
    }

    .header__drawer .menu__title, .header__drawer .close__title {
        text-transform: lowercase;
        font-size: 0.5625rem;
        font-weight: 400;
        line-height: 0;
    }

    @media (max-width: 1200px) {
        .header__logo {
            flex-grow: 1;
        }
    }

    @media (max-width: 1200px) {
        .header--floating {
            position: fixed;
            top: 0;
            background-color: #fff;
        }
    }

    @media (max-width: 1200px) {
        .header__desktop {
            display: none;
        }
    }

    @media (max-width: 1200px) {
        .header__mobile {
            display: flex;
            align-items: center;
        }
    }

`
