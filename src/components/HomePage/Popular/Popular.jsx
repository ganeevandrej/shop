import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { withApiOnlineStore } from "../../../hoc";

import style from "./popular.module.css";

const Popular = ({ apiOnlineStore }) => {
    const [popular, setPopular] = useState(null);

    useEffect(() => {
        apiOnlineStore.getPopularProduct()
            .then((res) => setPopular(res));
    }, [apiOnlineStore])

    return (
        <div className={style.wrapper}>
            <div>
                <h3>ПОПУЛЯРНЫЕ ТОВАРЫ</h3>
            </div>
            <div className={style.blockItem}>
                {popular && popular.map(({title, image, price, id}, index) => {
                    return (
                        <div key={index} className={style.item}>
                            <NavLink to={`product/${id}`}>
                                <img src={image} alt=""/>
                                <span>{ title }</span>
                                <span>{ price } рублей</span>
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default withApiOnlineStore(Popular);