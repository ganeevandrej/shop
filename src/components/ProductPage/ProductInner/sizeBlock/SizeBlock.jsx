import React from "react";

import style from "./sizeBlock.module.css";

export const SizeBlock = ({ setSize }) => {
    const handleClick = (e) => {
        const btnList = document.querySelectorAll(".btnActive");

        for(let i = 0; i < btnList.length; i++) {
            btnList[i].classList.remove('btnActive');
        }

        if(e.target.tagName !== "DIV") {
            e.target.classList.add('btnActive');
            setSize(e.target.textContent);
        }
    }

    return (
        <div className={style}>
            <span>Размер</span>
            <div onClick={ handleClick } className={style.btnBlock}>
                <button className="btnActive">S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
            </div>
        </div>
    );
}