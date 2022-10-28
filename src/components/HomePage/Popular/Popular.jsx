import style from "./popular.module.css";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {getApi} from "../../../utils/network";
import {IMG_PRODUCTS, SWAPI_POPULAR_ROOT} from "../../../constants/api";

const Popular = () => {
    const [popular, setPopular] = useState(null);

    const getPopularProduct = async (url) => {

        const popular = await getApi(url);

        const popularList = popular.map( ({title, image, price, category_id, id}) => {

            return {
                title,
                image,
                price,
                category_id,
                id
            }
        });

        setPopular(popularList);
    }

    useEffect(() => {
        getPopularProduct(SWAPI_POPULAR_ROOT);
    }, [])

    return (
        <div className={style.wrapper}>
            <div>
                <h3>ПОПУЛЯРНЫЕ ТОВАРЫ</h3>
            </div>
            {popular && (
                <div className={style.blockItem}>
                    {popular.map( ({title, image, price, id }, index) => {
                        return (
                            <div key={index} className={style.item}>
                                <NavLink to={`product/${id}`}>
                                    <img src={IMG_PRODUCTS+image} alt=""/>
                                    <span>{title}</span>
                                    <span>{price} рублей</span>
                                </NavLink>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Popular;