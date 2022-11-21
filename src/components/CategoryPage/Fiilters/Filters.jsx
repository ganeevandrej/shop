import style from "./filters.module.css";
import { NavLink } from "react-router-dom";
import img from "./img/стрелка.svg"
import React, {useEffect, useRef, useState} from "react";
import {getApi} from "../../../utils/network";
import {SWAPI_CATEGORY_ROOT, SWAPI_SUBCATEGORY_ROOT} from "../../../constants/api";

const Filters = ( {param} ) => {
    const [filters, setFilters] = useState(null);

    const getData = async (categoryURL, subCategoryURL) => {
        const category = await getApi(categoryURL);
        const subCategory = await getApi(subCategoryURL);

        const filtersList = category.map(( {name, id} ) => {
            const subcategory = subCategory.filter( ({itemId}) => itemId == id )
            return {
                name,
                id,
                subcategory
            }
        })

        setFilters(filtersList);
    }

    useEffect(() => {
        getData(SWAPI_CATEGORY_ROOT,SWAPI_SUBCATEGORY_ROOT);
    }, []);

    const showBlock = (e) => {
    }

    return (
        <div className={style.blockFolters}>
            <h3 className={style.title}>Каталог</h3>
            <div className={style.wrapperFilters}>
                <ul className={style.filtersList}>
                    {filters && (
                        filters.map( ({name, subcategory}, index ) => {
                            return (
                                <li className={style.filtersItem} key={index}>
                                    <NavLink to={`/category/${name}`} >
                                        <span>{name}</span>
                                    </NavLink>
                                    <img className={style.img} onClick={showBlock} src={img} alt=""/>
                                    <ul className={name == param.name ? "activeBlock" : style.subcategory}>
                                        {subcategory.map( (item) => {
                                            return (
                                                <li key={item.id}>
                                                    <NavLink to={`/category/${name}/${item.name}`}>
                                                        {item.name}
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            );
                        })
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Filters;