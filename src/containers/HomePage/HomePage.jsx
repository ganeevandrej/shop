import './HomePage.module.css';
import style from "./HomePage.module.css";
import Slider from "../../components/HomePage/Slider/Slider";
import Banners from "../../components/HomePage/Banners/Banners";
import HomeCategories from "../../components/HomePage/HomeCategories/HomeCategories";
import Popular from "../../components/HomePage/Popular/Popular";
import HomeDescription from "../../components/HomePage/HomeDescription/HomeDescription";

const HomePage = () => {
  return (
      <div className={style.wrapper}>
          <Slider />
          <Banners />
          <HomeCategories />
          <Popular />
          <HomeDescription />
      </div>

  );
}

export default HomePage;
