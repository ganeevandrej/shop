import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { withApiOnlineStore } from "../../../hoc";

import style from "./popular.module.css";

const Popular = ({ apiOnlineStore }) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        apiOnlineStore.getPopularProduct()
            .then((res) => setProducts(res));
    }, [apiOnlineStore])

    return (
        <div className={style.wrapper}>
            <div>
                <h3>ПОПУЛЯРНЫЕ ТОВАРЫ</h3>
            </div>
            { products && <ViewItem products={products} /> }
        </div>
    );
}

export const ViewItem = ({ products }) => {
    return (
        <div className={style.blockItem}>
            {products.map(({ title, image, price, id }, index) => {
                return (
                    <div key={ id } className={style.item}>
                        <NavLink to={`product/${id}`}>
                            <img src={ image } alt=""/>
                            <span>{ title }</span>
                            <span>{ price } рублей</span>
                        </NavLink>
                    </div>
                );
            })}
        </div>
    );
}

export default withApiOnlineStore(Popular);