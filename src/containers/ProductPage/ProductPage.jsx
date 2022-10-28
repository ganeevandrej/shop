import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getApi} from "../../utils/network";
import {SWAPI_CATEGORY_ROOT, SWAPI_PRODUCT_ROOT, SWAPI_SUBCATEGORY_ROOT} from "../../constants/api";
import ProductCookies from "../../components/ProductPage/ProductСookies/ProductCookies";
import style from "./ProductPage.module.css"
import ProductInner from "../../components/ProductPage/ProductInner/ProductInner";

const ProductPage = () => {

    const param = useParams();
    const [product, setProduct] = useState(null);


    const getProduct = async (categoryURL, subcategoryURL, productURL) => {
        const product = await getApi(productURL);
        const category = await getApi(categoryURL);
        const subcategory = await getApi(subcategoryURL);

        const categoryList = category.filter( ({id, name}) => id == product.category_id );
        product.category_id = categoryList[0].name;

        const subcategoryList = subcategory.filter( ({id, name}) => id == product.subcategoryId );
        product.subcategoryId = subcategoryList[0].name;

        console.log(product);
        setProduct(product);
    }

    useEffect(() => {
        getProduct(SWAPI_CATEGORY_ROOT, SWAPI_SUBCATEGORY_ROOT,SWAPI_PRODUCT_ROOT+param.id);
    }, [])

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
                        title={product.title}
                        articul={product.articul}
                        isBoolean={product.isBoolean}
                        price={product.price}
                        image={product.image}
                    />
                </div>
            )}
        </>
    );
}

export default ProductPage;