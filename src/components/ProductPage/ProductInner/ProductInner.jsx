import style from "./productInner.module.css";
import {IMG_PRODUCTS} from "../../../constants/api";
import React from "react";
import SizeBlock from "../sizeBlock/SizeBlock";

const ProductInner = ({image, title, price, articul, isBoolean}) => {
    return (
        <div className={style.wrapper}>
            <div>
                <img src={IMG_PRODUCTS+image} alt=""/>
            </div>
            <div className={style.descriptionProduct}>
                <h1>{title}</h1>
                <span>Артикул: {articul}</span>
                {isBoolean
                    ? <span className={style.booleanTrue}>В наличии</span>
                    : <span className={style.booleanFalse}>Нет в налачии</span>}
                <span className={style.price}>{price} рублей</span>
                <SizeBlock />
                <div>Таблица размеров</div>
                <div>actionCart</div>
                <div>Описание</div>
            </div>
        </div>
    );
}

export default ProductInner;