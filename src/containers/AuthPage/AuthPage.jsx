import React from "react";
import style from "./AuthPage.module.css";

const AuthPage = () => {
    return (
        <div className={style.wrapper}>
            <h2>Регистрация</h2>
            <div className={style.authBlock}>
                <form action="">
                    <div>
                        <span>контактное лицо (фио):</span>
                        <input type="text"/>
                    </div>
                    <div>
                        <span>контактный телефон:</span>
                        <input type="text"/>
                    </div>
                    <div>
                        <span>email:</span>
                        <input type="text"/>
                    </div>
                    <div>
                        <span>пароль:</span>
                        <input type="password"/>
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