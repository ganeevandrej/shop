import React from "react";
import { NavLink } from "react-router-dom";


import style from "./productList.module.css";

export const ProductList = ({ products }) => {
    return (
        <div className={style.wrapper}>
            {products.map( ({id, title,image, price}) => {
                return(
                    <div key={id} className={style.itemProduct}>
                        <NavLink to={`/product/${id}`}>
                            <img src={image} alt="" />
                            <span>{title}</span>
                            <span>{price} руб</span>
                        </NavLink>
                    </div>
                );
            })}
        </div>
    );
}