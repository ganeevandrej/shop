import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { withApiOnlineStore } from "../../hoc";

import { ProductsList } from "../../components/CategoryPage/ProductsList";
import { BreadCrumbs } from "../../components/CategoryPage/BreadCrumbs";
import { Filters } from "../../components/CategoryPage/Fiilters";
import { Select } from "../../components/CategoryPage/Select";

import { NameToId, NameToIdSub, sortProducts } from "./index";
import styles from "./CategoriesPage.module.css";

const CategoriesPage = ({ apiOnlineStore }) => {
    const [products, setProducts] = useState(null);
    const [select, setSelect] = useState('all');
    const param = useParams();
    const category_id = NameToId(param.name);
    const subCategory_id = param.subcategory && NameToIdSub(param.name, param.subcategory);

    const changeSelect = (value) => {
        const res = sortProducts(value, products);
        setSelect(value);
        setProducts(res);
    }

    useEffect(() => {
        apiOnlineStore.getProductsByCategory(category_id, subCategory_id)
            .then((res) => setProducts(res));
    }, [category_id, subCategory_id, apiOnlineStore]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h2>{ param.name }</h2>
            </div>
            <div>
                <div className={styles.blockCookiesAndSelect}>
                    <BreadCrumbs title={ param } />
                    <Select select={select} setSelect={ changeSelect } />
                </div>
                <div className={styles.filterAndProducts}>
                    <Filters param={ param } apiOnlineStore={ apiOnlineStore } />
                    <ProductsList products={ products } />
                </div>
            </div>
        </div>
    );
}

export default withApiOnlineStore(CategoriesPage);