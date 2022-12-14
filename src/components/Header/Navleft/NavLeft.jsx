import style from "./navLeft.module.css";
import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import select from "./img/select.png";
import {getApi} from "../../../utils/network";
import {SWAPI_CATEGORY_ROOT, SWAPI_SUBCATEGORY_ROOT} from "../../../constants/api";
import cn from "classnames";
import HiddenBlock from "./HiddenBlock/hiddenBlock";

const NavLeft = () => {
    const [category, setCategory] = useState(null);

    const getResource = async (category, subcategory) => {
        const categories = await getApi(category);
        const subcategories = await getApi(subcategory);

        const categoryList = categories.map(( {name, id} ) => {
            const subcategory = subcategories.filter( ({itemId}) => itemId === id )
            return {
                name,
                id,
                subcategory
            }
        })

        setCategory(categoryList);
    }

    useEffect( () => {
        getResource(SWAPI_CATEGORY_ROOT, SWAPI_SUBCATEGORY_ROOT);
    }, []);

    return (
        <>
            {category && (
                <ul className={style.left}>
                    {category.map(({id, name, subcategory}) => {
                        return (
                            <li key={id} className={cn(style.leftBlock, 'refHidden')}>
                                <NavLink className={style.ref} key={id} to={`/category/${name}`}>
                                    <span>{name}</span>
                                    <img src={select} alt=""/>
                                </NavLink>
                                <HiddenBlock key={name} categoryName={name} subcategory={subcategory}/>
                            </li>
                        );
                    })}
                </ul>
            )}
        </>

    );
}

export default NavLeft;