import React from "react";
import {NavLink} from "react-router-dom";
import style from "./LoginPage.module.css";

const LoginPage = () => {

    const action = (e) => {
        e.preventDefault();
        fetch("https://aaaa228.pythonanywhere.com/api/auth/token/login/",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    username: "anvar",
                    password: "424692112qwwq"
                })
            }).then((res) => res.json())
            .then( (res) => console.log(res));
    }

    return (
        <div className={style.wrapper}>
            <h3>ВХОД В КАБИНЕТ ПОКУПАТЕЛЯ</h3>
            <div className={style.loginBlock}>
                <form onSubmit={action}>
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