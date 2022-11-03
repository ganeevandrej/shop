import style from "./filters.module.css";
import {NavLink, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getApi} from "../../../utils/network";
import {SWAPI_SUBCATEGORY_ROOT} from "../../../constants/api";

const Filters = () => {
    const [subCategory, setSubCategory] = useState(null);
    const param = useParams();
    console.log(subCategory);

    const getSubcategory = async (url) => {
        const subCategory = await getApi(url);
        setSubCategory(subCategory);
    }

    useEffect(() => {
        getSubcategory(SWAPI_SUBCATEGORY_ROOT);
    }, [])

    return (
        <div className={style.blockFolters}>
            <h3>Каталог</h3>
            <div>
                <ul>
                    <li>
                        <NavLink><span>Мужчины</span></NavLink>
                        <img src="" alt=""/>
                        <ul>
                            <li><NavLink>Майки</NavLink></li>
                            <li><NavLink>Свитшоты</NavLink></li>
                            <li><NavLink>Джинсы</NavLink></li>
                            <li><NavLink>Шорты</NavLink></li>
                            <li><NavLink>Рубашки</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink>
                            <span>Женщины</span>
                        </NavLink>
                        <img src="" alt=""/>
                        <ul>
                            <li><NavLink>Майки</NavLink></li>
                            <li><NavLink>Свитшоты</NavLink></li>
                            <li><NavLink>Джинсы</NavLink></li>
                            <li><NavLink>Шорты</NavLink></li>
                            <li><NavLink>Рубашки</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink>
                            <span>Аксессуары</span>
                        </NavLink>
                        <img src="" alt=""/>
                        <ul>
                            <li><NavLink>Шляпы</NavLink></li>
                            <li><NavLink>Чехлы</NavLink></li>
                            <li><NavLink>Ремни</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Filters;