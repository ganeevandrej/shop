import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeProductsFromCart, removeUser} from "../../store/actions";
import {getApi} from "../../utils/network";
import {SWAPI_LOGOUT_ROOT, SWAPI_ORDERS_ROOT} from "../../constants/api";
import style from "./ProfilePage.module.css";

const ProfilePage = () => {
    const [orders, setOrders] = useState(null);
    const dispatch = useDispatch();
    const user = useSelector(state => state.UserReducer);

    const exit = async (e) => {
        e.preventDefault();
        await fetch(SWAPI_LOGOUT_ROOT,{
            headers: {
                "Authorization": `Token ${user.user.token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: {}
        });
        dispatch(removeUser("user"));
        dispatch(removeProductsFromCart());

    }

    useEffect(async () => {
        const order = await getApi(SWAPI_ORDERS_ROOT+user.user.id);
        setOrders(order);
    }, [user]);

    return (
        <div className={style.wrapper}>
            <h2>КАБИНЕТ ПОКУПАТЕЛЯ</h2>
            <div className={style.blockOrders}>
                <h4>ИСТОРИЯ ЗАКАЗОВ</h4>
                <div className={style.table}>
                    <div className={style.tableHeader}>
                        <span>НОМЕР ЗАКАЗА</span>
                        <span>ДАТА ОФОРМЛЕНИЯ</span>
                        <span  className={style.payment}>СТАТУС</span>
                        <span className={style.payment}>ОПЛАТА</span>
                        <span className={style.right}>СУММА ЗАКАЗА</span>
                    </div>
                    {orders && orders.map((item, index) => {
                        return (
                            <div className={style.rowOrder} key={index}>
                                <span>{item.id}</span>
                                <span>{item["date_created"].slice(0, 19)
                                    .replaceAll("-", " ")
                                    .replace("T", " ")}
                                </span>
                                <span  className={style.payment}>Принят</span>
                                <span  className={style.payment}>не оплачен</span>
                                <span  className={style.right}>{item.totalPrice} руб</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={style.logout}>
                <NavLink to={"/"} onClick={exit}>Выйти</NavLink>
            </div>
        </div>
    );
}

export default ProfilePage;