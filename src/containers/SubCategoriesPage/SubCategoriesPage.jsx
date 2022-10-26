import React from "react";
import {useParams} from "react-router-dom";

const SubCategoriesPage = () => {
    const param = useParams();
    console.log(param);
    return (
        <>
            <h1>{param.name}</h1>
        </>
    );
}

export default SubCategoriesPage;