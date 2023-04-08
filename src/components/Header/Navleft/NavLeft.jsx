import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import { withApiOnlineStore } from "../../../hoc";
import { HiddenBlock } from "./HiddenBlock";

import select from "./img/select.png";
import style from "./navLeft.module.css";

const NavLeft = ({ apiOnlineStore }) => {
    const [category, setCategory] = useState(null);

    useEffect( () => {
        apiOnlineStore.getCategory()
            .then((res) => setCategory(res));
    }, [apiOnlineStore]);

    return (
        <ul className={ style.left }>
            {category && category.map(({id, name, subcategory}) => {
                return (
                    <li key={id} className={cn(style.leftBlock, 'refHidden')}>
                        <NavLink className={style.ref} to={`/category/${name}`}>
                            <span>{ name }</span>
                            <img src={ select } alt=""/>
                        </NavLink>
                        <HiddenBlock categoryName={ name } subcategory={ subcategory } />
                    </li>
                );
            })}
        </ul>
    );
}

export default withApiOnlineStore(NavLeft);