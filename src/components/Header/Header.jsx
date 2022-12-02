import React from 'react';
import logo from "./img/logo.png"
import style from "./header.module.css"
import {NavLink} from "react-router-dom";
import NavLeft from "./Navleft/NavLeft";
import NavRight from "./NavRight/NavRight";

const Header = () => {

    return (
        <>
            <div className={style.logo}>
                <NavLink to={"/"}>
                    <img src={logo} alt="logo"/>
                </NavLink>
            </div>
            <div className={style.navigation}>
                <NavLeft />
                <NavRight />
            </div>
        </>
    );
}

export default Header;