import React from "react";

import Popular from "../../components/HomePage/Popular/Popular";
import { Slider } from "../../components/HomePage/Slider";
import { Banners } from "../../components/HomePage/Banners";
import { HomeCategories } from "../../components/HomePage/HomeCategories";
import { HomeDescription } from "../../components/HomePage/HomeDescription";

import style from "./HomePage.module.css";

export const HomePage = () => {
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