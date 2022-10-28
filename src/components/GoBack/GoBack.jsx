import style from "./goBack.module.css";
import {NavLink, useHistory } from "react-router-dom";

const GoBack = () => {

    const handleGoBack = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <NavLink to="/" onClick={handleGoBack}>
                <img src="" alt=""/>
            </NavLink>
        </div>
    );
}

export default GoBack;