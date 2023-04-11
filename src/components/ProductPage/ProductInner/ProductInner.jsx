import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SizeBlock } from "./sizeBlock";
import { InputCount } from "../../inputCount";
import { BtnCart } from "./BtnCart";

import { addItemToCart, removeProductFromCart } from "../../../store/actions";

import style from "./productInner.module.css";

export const ProductInner = ({ product }) => {
    const { image, title, description, id, price, articul, isAvailability } = product;
    const { productCart } = useSelector((state) => state.CartReducer);
    const isProductCart = productCart.find((elem) => elem.id === id);
    const dispatch = useDispatch();

    const addItem = (size, count) => {
        const item = { id, image, title, price, articul, size, count }
        dispatch(addItemToCart(item));
    }

    const removeItem = (id) => {
        dispatch(removeProductFromCart(id));
    }

    return (
        <div className={style.wrapper}>
            <div>
                <img src={ image } alt=""/>
            </div>
            <div className={style.descriptionProduct}>
                <h1>{ title }</h1>
                <span>Артикул: { articul }</span>

                { isAvailability
                    ? <span className={style.booleanTrue}>В наличии</span>
                    : <span className={style.booleanFalse}>Нет в налачии</span>
                }

                <span className={style.price}>{ price } рублей</span>

                <View
                    isProductCart={isProductCart}
                    addItem={ (size, count) => addItem(size, count) }
                    removeItem={() => removeItem(id)}
                />

                <div className={style.description}>
                    { description }
                </div>
            </div>
        </div>
    );
}

export const View = ({ isProductCart, addItem, removeItem }) => {
    const [size, setSize] = useState("S");
    const [count, setCount] = useState(1);

    return (
        <>
            <SizeBlock setSize={ setSize } />
            <div className={style.table}>
                <span>Таблица размеров</span>
            </div>
            <div className={style.wrapperBlockCart}>
                <InputCount count={ count } setCount={ setCount } />
                <BtnCart
                    isProductCart={ isProductCart }
                    removeItem={ removeItem }
                    addItem={ () => addItem(size, count) } />
            </div>
        </>
    );
}