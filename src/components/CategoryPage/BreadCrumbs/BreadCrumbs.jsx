import React from "react";
import { NavLink } from "react-router-dom";

import homeIcon from "./img/720.png";
import style from "./BreadCrumbs.module.css";

export const BreadCrumbs = ({ title }) => {
    console.log(title);
    const span = <span>{ title.name }</span>;
    const link = <NavLink to={`/category/${title.name}`}>{title.name}</NavLink>;

    return (
        <div className={style.wrapper}>
            <NavLink to="/">
                <img src={homeIcon} alt="" />
            </NavLink>
            { title.subcategory ? link : span }
            { <span>{ title.subcategory }</span> }
        </div>
    );
}
