import style from "./navRight.module.css";
import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import cart from "./img/cart.png";
import profile from "./img/profile.png";
import search from "./img/search.png";
import {useSelector} from "react-redux";

const NavRight = () => {
    const [count, setCount] = useState(null);
    const [navItem, setNavItem] = useState(null);

    const countItem = useSelector(state => state.CartReducer)

    useEffect(() => {
        const length = Object.keys(countItem).length;
        setCount(length);
        setNavItem([
            {img: search, path: "/search"},
            {img: profile, path: "/client_account/orders"}
        ])
    }, [countItem])

    return (
        <div className={style.right}>
            {navItem && navItem.map((item, index) => {
                return (
                    <NavLink key={index} to={item.path}>
                        <img src={item.img} alt=""/>
                    </NavLink>);
            })}
            <NavLink className={style.cart} to="/cart_items">
                <img src={cart} alt=""/>
                <span>{count}</span>
            </NavLink>
        </div>
    );
}

export default NavRight;