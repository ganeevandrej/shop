import React, {useState} from "react";
import style from "./AuthPage.module.css";
import {postApi} from "../../utils/network";
import {SWAPI_AUTH_ROOT} from "../../constants/api";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/actions";
import {redirect, useNavigate} from "react-router-dom";

const AuthPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");
    const [passwordLast, setPasswordLast] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeInput = (e) => {
        const value = e.target.value;
        switch (e.target.name) {
            case "login":
                setLogin(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "passwordLast":
                setPasswordLast(value);
                break;
            default:
                return false;
        }
    }

    const action = async (e) => {
        e.preventDefault();

        if (password === passwordLast) {
            const res = await postApi( SWAPI_AUTH_ROOT,
                {
                    username: login,
                    password: password,
                    email: email
                });
            dispatch(setUser(res.token));
            return navigate("/");
        }
    }

    return (
        <div className={style.wrapper}>
            <h2>Регистрация</h2>
            <div className={style.authBlock}>
                <form onSubmit={action}>
                    <div>
                        <span>логин:</span>
                        <input name="login" onChange={changeInput} type="text" value={login}/>
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
                        <input name="passwordLast" onChange={changeInput} type="password" value={passwordLast}/>
                    </div>
                    <button>Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
}

export default AuthPage;