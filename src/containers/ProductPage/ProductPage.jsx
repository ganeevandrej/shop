import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { withApiOnlineStore } from "../../hoc";

import { ProductCookies } from "../../components/ProductPage/ProductСookies";
import { ProductInner } from "../../components/ProductPage/ProductInner";

import style from "./ProductPage.module.css"

const ProductPage = ({ apiOnlineStore }) => {
    const [product, setProduct] = useState(null);
    const param = useParams().id;

    useEffect(() => {
        apiOnlineStore.getProduct(param)
            .then((res) => setProduct(res))
    }, [param])

    return (
        <>
            { product && (
                <div className={style.wrapper}>
                    <ProductCookies
                        title={ product.title }
                        category={ product.categoryName }
                        subcategory={ product.subCategory_name }
                    />
                    <ProductInner product={ product }/>
                </div>
            )}
        </>
    );
}

export default withApiOnlineStore(ProductPage);