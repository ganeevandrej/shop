import React, {useState} from "react";
import style from "./SearchPage.module.css";
import {getApi} from "../../utils/network";
import {SWAPI_SEARCH_ROOT} from "../../constants/api";
import ProductList from "../../components/Search/ProductList/productList";

const SearchPage = () => {
    const [string, setString] = useState(null);
    const [products, setProducts] = useState(null);

    const onChangeInput = (e) => {
        setString(e.target.value);
    }

    const searchClick = async () => {
        if(string) {
            const getProduct = await getApi(SWAPI_SEARCH_ROOT+string);
            setProducts(getProduct);
        }
        return false;
    }

    return (
        <div className={style.wrapper}>
            <h1>Поиск</h1>
            <div className={style.searchBlock}>
                <div className={style.form}>
                    <span>Введите ключевые слова для поиска</span>
                    <input type="text" onChange={onChangeInput} placeholder="Поиск"/>
                    <button onClick={searchClick} className={style.submit}></button>
                </div>
            </div>
            {products ?
                <ProductList products={products} /> :
                <div className={style.description}>Введите ключевые слова для поиска</div>}
        </div>
    );
}

export default SearchPage;