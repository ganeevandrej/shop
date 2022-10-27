import Carousel from 'react-slick';
import {NavLink} from "react-router-dom";
import style from "./slider.module.css"
import image1 from "./img/main_image_1-loaded.jpg";
import image2 from "./img/main_image_2-loaded.jpg";
import image3 from "./img/main_image_3-loaded.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = (props) => {
    const arrImg = [image1, image2, image3];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
    };

    return (
        <Carousel {...settings}>
            {arrImg.map((item, index) => {
                return (
                    <NavLink key={index} to={"/category/Женщины"}>
                        <img className={style.sliderImg} src={item} alt=""/>
                    </NavLink>
                );
            })}
        </Carousel>
    );
}

export default Slider;