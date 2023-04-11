import React, { useState } from "react";

import { withApiOnlineStore } from "../../hoc";

import style from "./SearchPage.module.css";
import {ProductList} from "../../components/Search/ProductList/productList";

const SearchPage = ({ apiOnlineStore }) => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);

    const onChangeInput = (e) => {
        setSearch(e.target.value);
    }

    const searchClick = async () => {
        search && apiOnlineStore.search(search).then((res) => setProducts(res));
    }

    return (
        <div className={style.wrapper}>
            <h1>Поиск</h1>
            <div className={style.searchBlock}>
                <div className={style.form}>
                    <span>Введите ключевые слова для поиска</span>
                    <input type="text" onChange={ onChangeInput } value={ search } placeholder="Поиск"/>
                    <button onClick={ searchClick } className={style.submit}></button>
                </div>
            </div>
            {products
                ? <ProductList products={ products } />
                : <div className={style.description}>Введите ключевые слова для поиска</div>
            }
        </div>
    );
}

export default withApiOnlineStore(SearchPage);