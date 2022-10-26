import React from "react";
import {useParams} from "react-router-dom";

const CategoriesPage = () => {
    const param = useParams();
    return (
        <>
            <h1>{param.name}</h1>
        </>
    );
}

export default CategoriesPage;