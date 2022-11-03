import style from "./productsList.module.css";
import {NavLink} from "react-router-dom";
import {IMG_PRODUCTS} from "../../../constants/api";
import React from "react";

const ProductsList = ({products}) => {
    return (
        <div className={style.blockProduct}>
            {products && (
                products.map( ({image, title, price, id}, index) => {
                    return (
                        <div key={index} className={style.itemProduct}>
                            <NavLink to={`/product/${id}`}>
                                <img src={IMG_PRODUCTS+image} alt=""/>
                                <span>{title}</span>
                                <span>{price} руб</span>
                            </NavLink>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default ProductsList;