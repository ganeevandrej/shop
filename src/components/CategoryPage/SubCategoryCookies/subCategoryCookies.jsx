import style from "./subCategoryCookies.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import homeIcon from "./img/720.png";

const ProductCookies = ({title}) => {
    return (
        <div className={style.wrapper}>
            <NavLink to="/">
                <img src={homeIcon} alt=""/>
            </NavLink>
            <NavLink to={`/category/${title.name}`}>{title.name}</NavLink>
            <span>{title.subcategory}</span>
        </div>
    );
}

export default ProductCookies;