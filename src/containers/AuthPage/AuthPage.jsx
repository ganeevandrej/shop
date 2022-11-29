import React, {useState} from "react";
import style from "./AuthPage.module.css";
import {postApi} from "../../utils/network";
import {SWAPI_AUTH_ROOT} from "../../constants/api";

const AuthPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");

    const changeInput = (e) => {
        const value = e.target.value;
        if (e.target.type === "password") {
            setPassword(value);
        } else {
            e.target.name === "name" ? setLogin(value) : setEmail(value);
        }
    }

    const action = async (e) => {
        e.preventDefault();

        const res = await postApi( SWAPI_AUTH_ROOT,
            {
                username: "Андрей",
                password: "123ganeevEbatTip",
                email: "ganee@psdc.tip"
            });
        console.log(res);
    }

    return (
        <div className={style.wrapper}>
            <h2>Регистрация</h2>
            <div className={style.authBlock}>
                <form onSubmit={action}>
                    <div>
                        <span>логин:</span>
                        <input name="name" onChange={changeInput} type="text" value={login}/>
                    </div>
                    <div>
                        <span>email:</span>
                        <input name="email" onChange={changeInput} type="text" value={email}/>
                    </div>
                    <div>
                        <span>пароль:</span>
                        <input name="password" onChange={changeInput} type="password" value={password}/>
                    </div>
                    <div>
                        <span>повторите пароль:</span>
                        <input type="password"/>
                    </div>
                    <button>Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
}

export default AuthPage;