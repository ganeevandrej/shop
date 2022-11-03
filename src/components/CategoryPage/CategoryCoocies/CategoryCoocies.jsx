import style from "./categoryCoocies.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import homeIcon from "./img/720.png";

const ProductCookies = ({title}) => {
    return (
        <div className={style.wrapper}>
            <NavLink to="/">
                <img src={homeIcon} alt=""/>
            </NavLink>
            <span>{title}</span>
        </div>
    );
}

export default ProductCookies;