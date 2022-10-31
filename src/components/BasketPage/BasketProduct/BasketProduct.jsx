import style from "./basketProduct.module.css";
import {IMG_PRODUCTS} from "../../../constants/api";
import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeProductFromCart} from "../../../store/actions";
import remove from "./img/1828778.png";
import InputCountCart from "./inputCountCart/InputCountCart";

const BasketProduct = ({product}) => {

    const dispatch = useDispatch();

    const removeItem = (e) => {
        const id = e.target.id;
        dispatch(removeProductFromCart(id));
    }

    return (
        <div className={style.item}>
            <div className={style.ImgItem}>
                <img src={IMG_PRODUCTS + product.img} alt=""/>
            </div>
            <div className={style.titleItem}>
                <NavLink to={`/product/${product.id}`}>{`${product.title} (${product.size})`}</NavLink>
                <span className={style.articul}>арт. {product.articul}</span>
            </div>
            <div className={style.priceItem}>
                <InputCountCart id={product.id} count={product.countProduct} />
                x
                <span>{product.price} руб</span>
                =
                <span>{product.generalPrice} руб</span>
            </div>
            <div className={style.remove}>
                <img onClick={removeItem} id={product.id} src={remove} alt=""/>
            </div>
        </div>
    );
}

export default BasketProduct;