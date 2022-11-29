import React from "react";
import {NavLink} from "react-router-dom";

const ProfilePage = () => {

    const exit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://kkkkss.pythonanywhere.com/api/logout/",{
            headers: {
                "Authorization": " Token d56e7341c955546100bcbc235f68a7785a6c0725d562ca7b9357cdfa46b4b418",
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: {}
        });
    }

    return (
        <>
            <h1>КАБИНЕТ ПОКУПАТЕЛЯ</h1>
            <div>
                <NavLink to={"/"} onClick={exit}>Выйти</NavLink>
            </div>
            <div>
                <h3>ИСТОРИЯ ЗАКАЗОВ</h3>
                <div>

                </div>
            </div>

        </>
    );
}

export default ProfilePage;