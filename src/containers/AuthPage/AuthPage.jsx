import React from "react";
import style from "./AuthPage.module.css";

const AuthPage = () => {


    const action = (e) => {
        e.preventDefault();
        /*const users = fetch("https://aaaa228.pythonanywhere.com/api/auth/users/")
            .then((res) => res.json())
            .then((res) => console.log(res));*/
        fetch("https://aaaa228.pythonanywhere.com/api/auth/users/",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    username: "Андрей",
                    password: "123ganeevEbatTip",
                    email: "ganee@psdc.tip"
                })
            }).then((res) => res.json())
            .then( (res) => console.log(res));
    }

    return (
        <div className={style.wrapper}>
            <h2>Регистрация</h2>
            <div className={style.authBlock}>
                <form onSubmit={action}>
                    <div>
                        <span>логин:</span>
                        <input name="name" type="text"/>
                    </div>
                    <div>
                        <span>email:</span>
                        <input name="email" type="text"/>
                    </div>
                    <div>
                        <span>пароль:</span>
                        <input name="password" type="password"/>
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