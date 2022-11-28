import style from "./productList.module.css";
import {NavLink} from "react-router-dom";
import {IMG_PRODUCTS} from "../../../constants/api";
import React from "react";

const ProductList = ({products}) => {
    console.log(products);
    return (
        <div className={style.wrapper}>
            {products.map( (item, index) => {
                let newImg = item.image.replace("https://aaaa228.pythonanywhere.com", "");
                return(
                    <div key={index} className={style.itemProduct}>
                        <NavLink to={`/product/${item.id}`}>
                            <img src={IMG_PRODUCTS+newImg} alt="" />
                            <span>{item.title}</span>
                            <span>{item.price} руб</span>
                        </NavLink>
                    </div>
                );
            })}
        </div>
    );
}

export default ProductList;