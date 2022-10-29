import React from "react";
import {useSelector} from "react-redux";

const BasketPage = () => {
    const storeDate = useSelector(state => state.CartReducer);
    console.log(storeDate);

    return (
        <>
            <h1>Корзина</h1>
        </>
    );
}

export default BasketPage;