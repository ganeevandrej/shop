import React from "react";
import { NavLink } from "react-router-dom";

import InputCountCart from "./inputCountCart/InputCountCart";

import style from "./basketProduct.module.css";
import remove from "./img/1828778.png";

const BasketProduct = ({ product, removeItem, updateItem }) => {
    const { id, image, title, articul, count, size, price } = product;

    return (
        <div className={style.item}>
            <div className={style.ImgItem}>
                <img src={ image } alt=""/>
            </div>
            <div className={style.titleItem}>
                <NavLink to={`/product/${id}`}>{`${ title } (${ size })`}</NavLink>
                <span className={style.articul}>арт. { articul }</span>
            </div>
            <div className={style.priceItem}>
                <InputCountCart updateItem={(id, action) => updateItem(id, action)} count={ count } item_id={id} />
                x
                <span>{ price } руб</span>
                =
                <span>{ price * count } руб</span>
            </div>
            <div className={style.remove}>
                <img onClick={ () => removeItem(id) } src={ remove } alt="" />
            </div>
        </div>
    );
}

export default BasketProduct;