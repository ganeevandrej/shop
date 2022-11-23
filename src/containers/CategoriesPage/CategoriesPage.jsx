import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWAPI_PRODUCTS_ROOT } from "../../constants/api";
import { getApi, NameToId } from "../../utils/network";
import CategoryCookies from "../../components/CategoryPage/CategoryCookies/CategoryCookies";
import style from "./CategoriesPage.module.css";
import Select from "../../components/CategoryPage/Select/Select";
import ProductsList from "../../components/CategoryPage/ProductsList/ProductsList";
import Filters from "../../components/CategoryPage/Fiilters/Filters";

const CategoriesPage = () => {
    const [products, setProducts] = useState(null);
    const param = useParams();
    const id = NameToId(param.name);

    const getProducts = async (url) => {
        const products = await getApi(url+id);
        setProducts(products);
    }

    const sortProduct = async (url) => {
        const sort = await getApi(url);
        const products = sort.filter(({category_id}) => id === category_id);
        setProducts(products);
    }

    useEffect(() => {
        getProducts(SWAPI_PRODUCTS_ROOT);
    }, [param]);

    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                <h2>{param.name}</h2>
            </div>
            <div>
                <div className={style.bolckCoociesAndSelect}>
                    <CategoryCookies title={param.name} />
                    <Select sortProduct={sortProduct}/>
                </div>
                <div className={style.filterandprodicts}>
                    <Filters param={param}/>
                    <ProductsList products={products} />
                </div>
            </div>
        </div>
    );
}

export default CategoriesPage;