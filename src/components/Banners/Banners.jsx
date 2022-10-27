import style from "./banners.module.css";
import banner1 from "./img/index_banner_top_image1.jpg";
import banner2 from "./img/index_banner_top_image2.jpg";

const Banners = () => {
    return (
        <div className={style.bannerBlock}>
            <img src={banner1} alt=""/>
            <img src={banner2} alt=""/>
        </div>
    );
}

export default Banners;