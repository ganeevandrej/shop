import React from "react";
import style from "./select.module.css";

export const Select = ({ select, setSelect }) => {

    const changeSort = (e) => {
        const value = e.target.value;
        setSelect(value);
    }

    return (
        <div className={style.blockSelect}>
            <span>Сортировать</span>
            <select className={style.select} value={ select }  onChange={ changeSort } name="Сортировка">
                <option value="all">По умолчанию</option>
                <option value="ascending">По возрастанию цены</option>
                <option value="descending">По убыванию цены</option>
                <option value="alphabeticalUp">По алфавиту А-Я</option>
                <option value="AlphabeticalDown">По алфавиту Я-А</option>
            </select>
        </div>
    );
}