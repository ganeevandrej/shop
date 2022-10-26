import style from "./navRight.module.css";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import cart from "./img/cart.png";
import profile from "./img/profile.png";
import search from "./img/search.png";

const NavRight = () => {
    const [navItem, setNavItem] = useState([
        {img: search, path: "/search"},
        {img: profile, path: "/client_account/orders"},
        {img: cart, path: "/cart_items"}
    ]);

    return (
        <div className={style.right}>
            {navItem.map((item, index) => {
                return (
                    <NavLink key={index} to={item.path}>
                        <img src={item.img} alt=""/>
                    </NavLink>);
            })}
        </div>
    );
}

export default NavRight;