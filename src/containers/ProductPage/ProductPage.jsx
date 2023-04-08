import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { withApiOnlineStore } from "../../hoc";

import { ProductCookies } from "../../components/ProductPage/ProductСookies";
import { ProductInner } from "../../components/ProductPage/ProductInner";

import { SWAPI_CATEGORY_ROOT, SWAPI_PRODUCT_ROOT, SWAPI_SUBCATEGORY_ROOT } from "../../constants/api";
import { getApi } from "../../utils/network";

import style from "./ProductPage.module.css"

const ProductPage = ({ apiOnlineStore }) => {

    const param = useParams();
    const [product, setProduct] = useState(null);
    const [isProductCart, setIsProductCart] = useState(null);

    const setData = useSelector(state => state.CartReducer);

    const getProduct = async (categoryURL, subcategoryURL, productURL) => {
        const product = await getApi(productURL);
        const category = await getApi(categoryURL);
        const subcategory = await getApi(subcategoryURL);

        setData[product.id] ? setIsProductCart(true) : setIsProductCart(false);

        const categoryList = category.filter( ({id}) => id === product.category_id );
        product.category_id = categoryList[0].name;

        const subcategoryList = subcategory.filter( ({id}) => id === product.subcategoryId );
        product.subcategoryId = subcategoryList[0].name;

        setProduct(product);
    }

    useEffect(() => {
        getProduct(SWAPI_CATEGORY_ROOT, SWAPI_SUBCATEGORY_ROOT,SWAPI_PRODUCT_ROOT+param.id);
    }, [param])

    return (
        <>
            {product && (
                <div className={style.wrapper}>
                    <ProductCookies
                        title={product.title}
                        category={product.category_id}
                        subcategory={product.subcategoryId}
                    />
                    <ProductInner
                        isProductCart={isProductCart}
                        setIsProductCart={setIsProductCart}
                        id={product.id}
                        title={product.title}
                        articul={product.articul}
                        isBoolean={product.isBoolean}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                    />
                </div>
            )}
        </>
    );
}

export default withApiOnlineStore(ProductPage);