import React from "react";

import style from "./sizeBlock.module.css";

export const SizeBlock = ({ setSize }) => {

    const handleClick = (e) => {
        const btnList = document.querySelectorAll(".btnActive");
        const btnListArr = Array.from(btnList);

        btnListArr.map((item) => {

            return item.classList.remove("btnActive");
        })

        e.target.classList.add('btnActive');
        setSize(e.target.textContent);
    }

    return (
        <div className={style}>
            <span>Размер</span>
            <div className={style.btnBlock}>
                <button className="btnActive" onClick={handleClick}>S</button>
                <button onClick={handleClick}>M</button>
                <button onClick={handleClick}>L</button>
                <button onClick={handleClick}>XL</button>
            </div>
        </div>
    );
}