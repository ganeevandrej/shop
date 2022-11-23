import React, {useEffect, useState} from 'react';
import style from"./footer.module.css";
import {NavLink} from "react-router-dom";
import instagram from "./img/instagram.png";
import vk from "./img/vk.png";
import facebook from "./img/facebook.png";

const Footer = (props) => {

    const wordList = [
        {
            title: "покупателям",
            value: ["оплата", "магазины"]
        },
        {
            title: "информация",
            value: ["о нас"]
        }]
    const [word, setWord] = useState(null);

    useEffect(() => {
        setWord(wordList);
    }, []);

    return (
        <div className={style.footer}>
            <div className={style.wrapper}>
                {word && word.map(({title, value}) => {
                    return (
                        <div key={title} className={style.item}>
                            <h2>{title}</h2>
                            <div className={style.subBlock}>
                                {value.map(item => {
                                    return (
                                        <NavLink key={item} to={`/page/${item}`}>
                                            <span>{item}</span>
                                        </NavLink>
                                    );
                                })}
                            </div>
                        </div>);
                })}
                <div className={style.item}>
                    <h2>+7 (926) 321-21-21</h2>
                    <div className={style.subBlock}>
                        <img src={instagram} alt=""/>
                        <img src={vk} alt=""/>
                        <img src={facebook} alt=""/>
                    </div>
                </div>
            </div>
            <span className={style.i}>StyleShop 2022</span>
        </div>
    );
}

export default Footer;