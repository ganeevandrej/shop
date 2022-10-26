import React, {useState} from 'react';
import style from"./footer.module.css";
import {NavLink} from "react-router-dom";

const Footer = (props) => {

    const wordList = [
        {
            title: "покупателям",
            value: ["доставка", "оплата", "магазины"]
        },
        {
            title: "информация",
            value: ["о нас", "блог"]
        }]
    const [word, setWord] = useState(wordList);

    return (
        <div className={style.footer}>
            <div className={style.wrapper}>
                {word.map(({title, value}) => {
                    return (
                        <div key={title} className={style.item}>
                            <h3>{title}</h3>
                            <div>
                                {value.map(item => {
                                    return (
                                        <NavLink key={item} >
                                            <span>{item}</span>
                                        </NavLink>
                                    );
                                })}
                            </div>
                        </div>);
                })}
                <div className={style.item}>
                    <h3>+7 (926) 321-21-21</h3>
                    <div>
                        <img src="src/components/Footer/img/instagram.png" alt=""/>
                        <img src="src/components/Footer/img/vk.png" alt=""/>
                        <img src="./img/facebook.png" alt=""/>
                    </div>
                </div>
            </div>
            <span className={style.i}>StyleShop 2022</span>
        </div>
    );
}

export default Footer;