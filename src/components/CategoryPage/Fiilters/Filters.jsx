import style from "./filters.module.css";
import { NavLink } from "react-router-dom";
import imgTop from "./img/img_top.svg";
import imgBottom from "./img/img_bottom.svg";
import React, {useEffect, useState} from "react";
import {getApi} from "../../../utils/network";
import {SWAPI_CATEGORY_ROOT, SWAPI_SUBCATEGORY_ROOT} from "../../../constants/api";

const Filters = ( {param} ) => {
    const [filters, setFilters] = useState(null);

    const getData = async (categoryURL, subCategoryURL) => {
        const category = await getApi(categoryURL);
        const subCategory = await getApi(subCategoryURL);

        const filtersList = category.map(( {name, id} ) => {

            const subcategory = subCategory.filter( ({itemId}) => itemId === id )
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
        const list = e.target.nextElementSibling;

        if (list.className === "activeBlock") {
            e.target.src = imgTop;
            list.classList.remove("activeBlock");
            list.classList.add(style.subcategory);
        } else{
            e.target.src = imgBottom;
            list.classList.remove(style.subcategory);
            list.classList.add("activeBlock");
        }
    }

    return (
        <div className={style.blockFolters}>
            <h3 className={style.title}>Каталог</h3>
            <div>
                <ul className={style.filtersList}>
                    {filters && (
                        filters.map( ({name, subcategory, key}, index ) => {
                            return (
                                <li className={style.filtersItem} key={index}>
                                    <NavLink to={`/category/${name}`} >
                                        <span>{name}</span>
                                    </NavLink>
                                    <img className={style.img} onClick={showBlock}
                                         src={name === param.name ? imgBottom : imgTop} alt=""/>
                                    <ul className={name === param.name ? "activeBlock" : style.subcategory}>
                                        {subcategory.map( (item) => {
                                            return (
                                                <li key={item.id}>
                                                    <NavLink to={`/category/${name}/${item.name}`}>
                                                        <span>{item.name}</span>
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