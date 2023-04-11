import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import BasketCookies from "../../components/BasketPage/BasketCookies/BasketCookies";
import BasketProduct from "../../components/BasketPage/BasketProduct/BasketProduct";

import {removeProductFromCart, upDateProductCart} from "../../store/actions";

import style from "./BasketPage.module.css";

export const BasketPage = () => {
    const { productCart } = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();

    const totalPrice = productCart.reduce((sum, currentValue) => {
        return sum + currentValue.count * currentValue.price;
    }, 0);

    const removeItem = (id) => {
        dispatch(removeProductFromCart(id));
    }

    const updateItem = (id, action) => {
        dispatch(upDateProductCart(id, action));
    }

    const cartEmpty = <div className={style.nullItem}>В вашей корзине нет товаров</div>;
    const renderItemCart = productCart.map( (item )=> {
        return (
            <BasketProduct
                key={item.id}
                removeItem={ removeItem }
                updateItem={ updateItem }
                product={ item }
            />
        );
    });

    return (
        <div className={style.wrapper}>
            <h1>Корзина</h1>
            <BasketCookies />
            <div className={style.blockItem}>
                { productCart.length ? renderItemCart : cartEmpty }
            </div>
            <div className={style.newOrder}>
                <div>Итого: { totalPrice } руб</div>
                <NavLink to="/new_order">Оформить заказ</NavLink>
            </div>
        </div>
    );
}