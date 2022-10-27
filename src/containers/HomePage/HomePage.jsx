import './HomePage.module.css';
import Slider from "../../components/Slider/Slider";
import style from "./HomePage.module.css";
import Banners from "../../components/Banners/Banners";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import HomeDescription from "../../components/HomeDescription/HomeDescription";
import Popular from "../../components/Popular/Popular";

const HomePage = (props) => {
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
