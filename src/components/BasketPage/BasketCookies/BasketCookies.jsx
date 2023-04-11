import React from "react";
import { NavLink } from "react-router-dom";

import homeIcon from "./img/720.png";
import style from "./basketCookies.module.css";

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