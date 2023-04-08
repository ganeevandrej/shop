import React from "react";
import {NavLink} from "react-router-dom";

import homeIcon from "./img/720.png";

import style from "./productCookies.module.css";

export const ProductCookies = ({title, category, subcategory}) => {
    return (
        <div className={style.wrapper}>
            <NavLink to="/">
                <img src={homeIcon} alt=""/>
            </NavLink>
            <NavLink to={`/category/${category}`}>{category}</NavLink>
            <NavLink to={`/category/${category}/${subcategory}`}>{subcategory}</NavLink>
            <span>{title}</span>
        </div>
    );
}