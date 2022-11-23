import React from "react";
import style from "./SearchPage.module.css";

const SearchPage = () => {
    return (
        <div className={style.wrapper}>
            <h1>Поиск</h1>
            <div className={style.searchBlock}>
                <form action="">
                    <span>Введите ключевые слова для поиска</span>
                    <input type="text" placeholder="Поиск"/>
                    <button className={style.submit}></button>
                </form>
            </div>
            <div className={style.description}>Введите ключевые слова для поиска</div>
        </div>
    );
}

export default SearchPage;