import React from "react";
import {useParams} from "react-router-dom";
import DifferentCookies from "../../components/DifferentPage/cookies/differentCookies";
import Payment from "../../components/DifferentPage/payment/payment";
import style from "./DifferentPage.module.css";
import AboutMe from "../../components/DifferentPage/aboutMe/aboutMe";
import Map from "../../components/DifferentPage/map/map";

const DifferentPage = () => {
    const param = useParams();
    return (
        <div className={style.wrapper}>
            <h1>{param.name}</h1>
            <DifferentCookies cookies={param.name} />
            {param.name === "оплата" && <Payment />}
            {param.name === "о нас" && <AboutMe />}
            {param.name === "магазины" && <Map />}
        </div>
    );
}

export default DifferentPage;