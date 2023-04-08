import React from "react";
import { AboutMe } from "../../DifferentPage/aboutMe";

import style from "./homeDescription.module.css";

export const HomeDescription = () => {
    return (
        <div className={style.wrapper}>
            <AboutMe />
        </div>
    );
}