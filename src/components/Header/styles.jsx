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

    .header__search {
        position: relative;
    }

    .header__icon {
        width: 24px;
        opacity: 26%;
        top: 8px;
        position: absolute;
        padding-left: 10px;
        color: rgba(0, 0, 0, 0.26);
        line-height: 40px;
    }

    .header__input {
        height: 40px;
        width: 100%;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.23);
        padding-left: 40px;
    }

    .header__input:hover {
        border-color: #000;
    }

    .header__input::placeholder {
        font-size: 0.9375rem;
        font-weight: 600;
        font-family: "Open Sans";
        color: #9b9b9b;
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
