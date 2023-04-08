import React from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import style from "./hiddenBlock.module.css";

export const HiddenBlock = ({ subcategory, categoryName }) => {
    return (
        <ul className={cn(style.blockHidden, 'hidden')}>
            {subcategory.map( ({id, name, image}) => {
                return (
                    <li key={ id }>
                        <NavLink to={`category/${categoryName}/${name}`}>
                            <img src={ image } alt=""/>
                            <span>{ name }</span>
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}