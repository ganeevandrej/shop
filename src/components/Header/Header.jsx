import React, {useEffect, useState} from 'react';
import logo from "./img/logo.png"
import style from "./header.module.css"
import NavLeft from "../NavLeft/NavLeft";
import NavRight from "../NavRight/NavRight";
import {NavLink} from "react-router-dom";

const Header = (props) => {

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