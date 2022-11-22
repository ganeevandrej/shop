import style from "./differentCookies.module.css";
import {NavLink} from "react-router-dom";
import homeIcon from "./img/720.png";

const DifferentCookies = ({cookies}) => {
    return (
        <div className={style.wrapper}>
            <NavLink to="/">
                <img src={homeIcon} alt=""/>
            </NavLink>
            <span>{cookies}</span>
        </div>
    );
}

export default DifferentCookies;