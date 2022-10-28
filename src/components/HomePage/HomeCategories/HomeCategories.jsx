import style from "./homeCategories.module.css";
import img1 from "./img/image4xxl__3_.jpg";
import img2 from "./img/image4xxl.jpg";
import img3 from "./img/image1xxl__5_.jpg";
import {NavLink} from "react-router-dom";

let HomeCategories = (props) => {
    const arrItem = [
        {
            img: img1,
            name: "Женщины"
        },
        {
            img: img2,
            name: "Мужчины"
        },
        {
            img: img3,
            name: "Аксессуары"
        }
    ];

    return (
        <div className={style.wrapper}>
            {arrItem.map( ( {img, name},  index ) => {
                return (
                    <NavLink key={index} to={`/category/${name}`}>
                        <img src={img} alt=""/>
                        <span>{name}</span>
                    </NavLink>
                );
            })}
        </div>
    );
}

export default HomeCategories;