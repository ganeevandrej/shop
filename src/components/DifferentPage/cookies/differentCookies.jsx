import React from "react";
import { NavLink } from "react-router-dom";

import homeIcon from "./img/720.png";

import style from "./differentCookies.module.css";

export const DifferentCookies = ({cookies}) => {
    return (
        <div className={style.wrapper}>
            <NavLink to="/">
                <img src={homeIcon} alt=""/>
            </NavLink>
            <span>{cookies}</span>
        </div>
    );
}