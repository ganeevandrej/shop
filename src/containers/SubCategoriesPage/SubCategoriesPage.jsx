import React from "react";
import {useParams} from "react-router-dom";

const SubCategoriesPage = () => {
    const param = useParams();
    return (
        <>
            <h1>{`${param.name}${param.subcategory}`}</h1>
        </>
    );
}

export default SubCategoriesPage;