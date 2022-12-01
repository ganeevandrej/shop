import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import style from "./BasketPage.module.css";
import BasketCookies from "../../components/BasketPage/BasketCookies/BasketCookies";
import BasketProduct from "../../components/BasketPage/BasketProduct/BasketProduct";
import {NavLink} from "react-router-dom";

const BasketPage = () => {
    const [product, setProduct] = useState([]);
    const [priceTotal, setPriceTotal] = useState([]);
    const storeDate = useSelector(state => state.CartReducer);

    const handleClick = (e) => {
        alert("Ваша корзина пуста");
        return product.length || e.preventDefault();

    }

    useEffect(() => {
        const arr = Object.entries(storeDate);

        if(arr.length) {
            const resProduct = arr.map(item => {
                return {
                    id: item[0],
                    img: item[1].image,
                    title: item[1].title,
                    countProduct: item[1].count,
                    price: item[1].price,
                    size: item[1].size,
                    articul: item[1].articul,
                    generalPrice: item[1].price * item[1].count
                };
            });

            const priceTot = resProduct.reduce((res, {generalPrice}) => res += generalPrice, 0);

            setPriceTotal(priceTot);
            return setProduct(resProduct);
        }
        return setProduct([])

    }, [storeDate]);

    return (
        <div className={style.wrapper}>
            <h1>Корзина</h1>
            <BasketCookies />
            <div className={style.blockItem}>
                {
                    product.length
                        ? product.map( (item, index)=> <BasketProduct product={item} key={index} />)
                        : <div className={style.nullItem}>В вашей корзине нет товаров</div>
                }
            </div>
            <div className={style.newOrder}>
                <div>Итого: {product.length ? priceTotal : "0"} руб</div>
                <NavLink onClick={handleClick} to="/new_order">Оформить заказ</NavLink>
            </div>
        </div>
    );
}

export default BasketPage;