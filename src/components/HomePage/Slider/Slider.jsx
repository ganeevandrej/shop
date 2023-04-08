import Carousel from 'react-slick';
import { NavLink } from "react-router-dom";

import { arrImg, settings } from "./index";

import style from "./slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Slider = () => {
    return (
        <Carousel {...settings}>
            {arrImg.map((item, index) => {
                return (
                    <NavLink key={ index } to="/category/Женщины">
                        <img className={ style.sliderImg } src={ item } alt=""/>
                    </NavLink>
                );
            })}
        </Carousel>
    );
}