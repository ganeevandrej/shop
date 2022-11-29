import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import style from "./LoginPage.module.css";
import {postApi} from "../../utils/network";
import {SWAPI_LOGIN_ROOT} from "../../constants/api";

const LoginPage = () => {
    const [login,setLogin] = useState("");
    const [password,setPassword] = useState("");

    const changeInput = (e) => {
        const value = e.target.value;
        e.target.type === "text" ? setLogin(value) : setPassword(value);
    }

    const action = async (e) => {
        e.preventDefault();

        const res = await postApi(SWAPI_LOGIN_ROOT,
            {
                username: "Андрей",
                password: "123ganeevEbatTip"
            });
        console.log(res);
    }

    return (
        <div className={style.wrapper}>
            <h3>ВХОД В КАБИНЕТ ПОКУПАТЕЛЯ</h3>
            <div className={style.loginBlock}>
                <form onSubmit={action}>
                    <div>
                        <span>телефон или login:</span>
                        <input onChange={changeInput} type="text" value={login} />
                    </div>
                    <div>
                        <span>пароль:</span>
                        <input onChange={changeInput} type="password" value={password} />
                    </div>
                    <button>Войти</button>
                </form>
                <NavLink to="/client_account/users/new">Зарегистрироваться</NavLink>
            </div>
        </div>
    );
}

export default LoginPage;