import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import cart from "./img/cart.png";
import profile from "./img/profile.png";
import search from "./img/search.png";
import style from "./navRight.module.css";

export const NavRight = () => {
    const { productCart } = useSelector((state) => state.CartReducer);

    return (
        <div className={style.right}>
            <NavLink className={style.cart} to="/search">
                <img src={search} alt="поиск"/>
            </NavLink>
            <NavLink className={style.cart} to="/client_account/orders">
                <img src={profile} alt="профиль"/>
            </NavLink>
            <NavLink className={style.cart} to="/cart_items">
                <img src={cart} alt="корзина"/>
                <span>{ productCart.length }</span>
            </NavLink>
        </div>
    );
}