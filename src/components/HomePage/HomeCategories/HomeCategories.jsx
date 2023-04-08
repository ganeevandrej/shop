import React from "react";
import { NavLink } from "react-router-dom";

import { arrItem } from "./index";

import style from "./homeCategories.module.css";

export const HomeCategories = () => {
    return (
        <div className={style.wrapper}>
            {arrItem.map( ( {img, name},  index ) => {
                return (
                    <NavLink key={index} to={`/category/${name}`}>
                        <img src={ img } alt=""/>
                        <span>{ name }</span>
                    </NavLink>
                );
            })}
        </div>
    );
}