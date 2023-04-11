import React from "react";

import plus from "./img/1828921.png";
import minus from "./img/32320.png";
import styles from "./inputCount.module.css";

export const InputCount = ( {id, count, setCount} ) => {

    const increment = () => {
        setCount(++count);
    }
    const decrement = () => {
        if(count > 1) {
            setCount(--count);
        }
    }

    return (
        <div className={styles.wrapperCount}>
            <input id={ id } type="text" readOnly value={ count } />
            <div className={styles.count}>
                <div onClick={ increment }>
                    <img src={ plus } alt="" />
                </div>
                <div onClick={ decrement }>
                    <img src={ minus } alt="" />
                </div>
            </div>
        </div>
    );
}