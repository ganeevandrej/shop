import React from "react";
import {NavLink} from "react-router-dom";
import style from "./LoginPage.module.css";

const LoginPage = () => {
    return (
        <div className={style.wrapper}>
            <h3>ВХОД В КАБИНЕТ ПОКУПАТЕЛЯ</h3>
            <div className={style.loginBlock}>
                <form action="">
                    <div>
                        <span>телефон или email:</span>
                        <input type="text"/>
                    </div>
                    <div>
                        <span>пароль:</span>
                        <input type="password"/>
                    </div>
                    <button>Войти</button>
                </form>
                <NavLink to="/client_account/users/new">Зарегистрироваться</NavLink>
            </div>
        </div>
    );
}

export default LoginPage;