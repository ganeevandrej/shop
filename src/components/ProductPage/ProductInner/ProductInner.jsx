import style from "./productInner.module.css";
import {IMG_PRODUCTS} from "../../../constants/api";
import React, {useState} from "react";
import SizeBlock from "../sizeBlock/SizeBlock";
import BtnCart from "../BtnCart/BtnCart";

const ProductInner = ({setIsProductCart, isProductCart, image, title, description, price, id, articul, isBoolean}) => {

    const [size, setSize] = useState("S");
    const [count, setCount] = useState(1);

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
                <SizeBlock setSize={setSize}/>
                <div className={style.table}>
                    <span>Таблица размеров</span>
                </div>
                <BtnCart price={price} title={title}
                         articul={articul} image={image} id={id}
                         isProductCart={isProductCart}
                         setIsProductCart={setIsProductCart}
                         size={size}
                         count={count}
                         setCount={setCount}

                />
                <div className={style.description}>{description}</div>
            </div>
        </div>
    );
}

export default ProductInner;