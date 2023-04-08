import React, { useEffect, useState } from "react";

import { ItemList } from "./ItemList";

import imgTop from "./img/img_top.svg";
import imgBottom from "./img/img_bottom.svg";

import style from "./filters.module.css";

export const Filters = ({ param, apiOnlineStore }) => {
    const [category, setCategory] = useState(null);

    useEffect(() => {
        apiOnlineStore.getCategory()
            .then((res) => setCategory(res));
    }, [apiOnlineStore]);

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
        <div className={style.blockFilters}>
            <h3 className={style.title}>Каталог</h3>
            <div>
                <ul className={style.filtersList}>
                    { category && category.map((item) => {
                        return (
                            <ItemList
                                key={ item.id }
                                showBlock={ showBlock }
                                item={ item }
                                param={ param }
                            />
                        );}
                    )}
                </ul>
            </div>
        </div>
    );
}