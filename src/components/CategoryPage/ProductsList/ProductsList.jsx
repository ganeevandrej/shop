import React from "react";
import { NavLink } from "react-router-dom";

import style from "./productsList.module.css";

export const ProductsList = ({ products }) => {
    return (
        <div className={style.blockProduct}>
            {products && (
                products.map( ({ image, title, price, id }) => {
                    return (
                        <div key={id} className={style.itemProduct}>
                            <NavLink to={`/product/${id}`}>
                                <img src={image} alt=""/>
                                <span>{ title }</span>
                                <span>{ price } руб</span>
                            </NavLink>
                        </div>
                    );
                })
            )}
        </div>
    );
}