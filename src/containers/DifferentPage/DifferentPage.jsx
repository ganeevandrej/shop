import React from "react";
import { useParams } from "react-router-dom";

import { DifferentCookies } from "../../components/DifferentPage/cookies";
import { Payment } from "../../components/DifferentPage/payment";
import { AboutMe } from "../../components/DifferentPage/aboutMe";
import { Map } from "../../components/DifferentPage/map";

import style from "./DifferentPage.module.css";

export const DifferentPage = () => {
    const param = useParams().name;

    return (
        <div className={style.wrapper}>
            <h1>{ param }</h1>
            <DifferentCookies cookies={ param } />
            { param === "оплата" && <Payment /> }
            { param === "о нас" && <AboutMe /> }
            { param === "магазины" && <Map /> }
        </div>
    );
}