import {NavLink} from "react-router-dom";
import React from "react";
import style from "./hiddenBlock.module.css";
import cn from "classnames";
import {IMG_CATEGORY} from "../../../../constants/api";



const HiddenBlock = ( {subcategory, categoryName} ) => {
    return (
        <ul className={cn(style.blockHidden, 'hidden')}>
            {subcategory.map( ({id, name, image}) => {
                return (
                    <li key={id}>
                        <NavLink to={`category/${categoryName}/${name}`}>
                            <img src={IMG_CATEGORY+image} alt=""/>
                            <span>{name}</span>
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}

export default HiddenBlock;