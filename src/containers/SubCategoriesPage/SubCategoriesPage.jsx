import React from "react";
import {useParams} from "react-router-dom";

const SubCategoriesPage = () => {
    const param = useParams();
    return (
        <>
            <h1>{param.name}</h1>
        </>
    );
}

export default SubCategoriesPage;