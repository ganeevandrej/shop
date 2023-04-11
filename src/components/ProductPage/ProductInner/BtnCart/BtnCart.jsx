import React from "react";

import style from "./btnCart.module.css";

export const BtnCart = ({ isProductCart, addItem, removeItem }) => {
    return (
        <div className={style.wrapper}>
            <button
                onClick={ !isProductCart ?  addItem : removeItem }
            >
                { isProductCart ? "Удалить из карзины" : "Добавить в корзину" }
            </button>
        </div>
    );
}