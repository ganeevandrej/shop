import style from "./productCookies.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import homeIcon from "./img/720.png";

const ProductCookies = ({title, category, subcategory}) => {
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

export default ProductCookies;