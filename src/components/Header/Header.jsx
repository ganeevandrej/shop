import React from 'react';
import { NavLink } from "react-router-dom";

import NavLeft from "./Navleft";
import { NavRight } from "./NavRight";

import logo from "./img/logo.png"
import style from "./header.module.css"

export const Header = () => {
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