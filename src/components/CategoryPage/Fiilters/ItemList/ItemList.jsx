import React from "react";
import { NavLink } from "react-router-dom";

import imgBottom from "../img/img_bottom.svg";
import imgTop from "../img/img_top.svg";

import styles from "../filters.module.css";

export const ItemList = ({ item, showBlock, param }) => {
    const { name, subcategory } = item;

    const renderSubcategory = subcategory.map((item, index) => {
        return (
            <li key={index}>
                <NavLink to={`/category/${name}/${item.name}`}>
                    <span>{item.name}</span>
                </NavLink>
            </li>
        );
    });

    return (
        <li className={styles.filtersItem}>
            <NavLink to={`/category/${name}`}>
                <span>{name}</span>
            </NavLink>
            <img className={styles.img} onClick={showBlock}
                 src={name === param.name ? imgBottom : imgTop} alt=""/>
            <ul className={name === param.name ? "activeBlock" : styles.subcategory}>
                { renderSubcategory }
            </ul>
        </li>
    );
}