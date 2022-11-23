import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import style from "../CategoriesPage/CategoriesPage.module.css";
import Select from "../../components/CategoryPage/Select/Select";
import Filters from "../../components/CategoryPage/Fiilters/Filters";
import ProductsList from "../../components/CategoryPage/ProductsList/ProductsList";
import {getApi, NameToId, NameToIdSub} from "../../utils/network";
import {SWAPI_PRODUCTS_ROOT} from "../../constants/api";
import SubCategoryCookies from "../../components/CategoryPage/SubCategoryCookies/subCategoryCookies";

const SubCategoriesPage = () => {
    const [products, setProducts] = useState(null);
    const param = useParams();
    const idCategory = NameToId(param.name);
    const idSubCategory = NameToIdSub(param.name, param.subcategory);

    const getProduct = async (product) => {
        const productCategory = await getApi(product + idCategory);
        console.log(productCategory);
        const productSubCategory = productCategory.filter(({subcategoryId}) => idSubCategory === subcategoryId);

        setProducts(productSubCategory);
    }

    const sortProduct = async (url) => {
        const sort = await getApi(url);
        const products = sort.filter(({category_id, subcategoryId}) =>
            idCategory === category_id && idSubCategory === subcategoryId);
        setProducts(products);
    }

    useEffect(() => {
        getProduct(SWAPI_PRODUCTS_ROOT);
    }, [param]);

    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                <h2>{`${param.subcategory}`}</h2>
            </div>
            <div>
                <div className={style.bolckCoociesAndSelect}>
                    <SubCategoryCookies title={param} />
                    <Select sortProduct={sortProduct}/>
                </div>
                <div className={style.filterandprodicts}>
                    <Filters param={param}/>
                    <ProductsList products={products}/>
                </div>
            </div>
        </div>
    );
}

export default SubCategoriesPage;