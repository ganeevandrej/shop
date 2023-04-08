import React from "react";
import { NavLink } from "react-router-dom";

import { IMG_PRODUCTS } from "../../../constants/api";

import style from "./productList.module.css";

export const ProductList = ({ products }) => {
    return (
        <div className={style.wrapper}>
            {products.map( (item, index) => {
                let newImg = item.image.replace("https://kkk2.pythonanywhere.com", "");
                return(
                    <div key={index} className={style.itemProduct}>
                        <NavLink to={`/product/${item.id}`}>
                            <img src={IMG_PRODUCTS+newImg} alt="" />
                            <span>{item.title}</span>
                            <span>{item.price} руб</span>
                        </NavLink>
                    </div>
                );
            })}
        </div>
    );
}