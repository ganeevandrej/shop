import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../../store/actions";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.UserReducer);
    console.log(token);

    const exit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://kkkkss.pythonanywhere.com/api/logout/",{
            headers: {
                "Authorization": `Token ${token.token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: {}
        });
        dispatch(removeUser("token"));
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