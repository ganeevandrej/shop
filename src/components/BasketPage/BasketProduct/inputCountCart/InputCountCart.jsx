import React from "react";

import plus from "./img/1828921.png";
import minus from "./img/32320.png";
import style from "./inputCountCart.module.css";

const InputCountCart = ({ count, updateItem, item_id }) => {
    const removeItem = () => {
        if(count === 1) {
            return;
        } else {
            updateItem(item_id, -1);
        }
    }

    return (
        <div className={style.wrapper}>
            <input type="text" readOnly value={count} />
            <div className={style.count}>
                <div onClick={() => updateItem(item_id, +1)}>
                    <img src={ plus } alt="" />
                </div>
                <div onClick={removeItem}>
                    <img src={ minus } alt="" />
                </div>
            </div>
        </div>
    );
}

export default InputCountCart;