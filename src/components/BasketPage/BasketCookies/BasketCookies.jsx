import style from "./basketCookies.module.css";
import {NavLink} from "react-router-dom";
import homeIcon from "./img/720.png";
import React from "react";

const BasketCookies = () => {
    return (
        <div className={style.cookies}>
            <NavLink to="/">
                <img src={homeIcon} alt=""/>
            </NavLink>
            <span>Корзина</span>
        </div>
    );
}

export default BasketCookies;