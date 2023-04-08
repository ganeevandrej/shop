import React, { useEffect } from "react";

import { load } from '@2gis/mapgl';

import style from "./map.module.css";

export const Map = () => {
    const getMap = async () => {
        const mapglAPI = await load();
        const map = await new mapglAPI.Map('map-container', {
            center: [55.31878, 25.23584],
            zoom: 13,
            key: "rudcgu3317"
        });
        const  marker  =  new  mapglAPI.Marker ( map ,  {
            координаты : [ 55.31878 ,  25.23584 ] ,
        } ) ;
    }
    useEffect( () => {
        getMap();
    }, []);

    return <div id="map-container"></div>;
}