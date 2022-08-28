import React from "react";
import tv2 from "./images/tv2.png";
import nrk from "./images/nrk.png";
import vg from "./images/vg.png";
import e24 from "./images/e24.png";

const imageMap = {
    "tv2": tv2,
    "nrk": nrk,
    "vg": vg,
    "e24": e24
}

export default function Article(props){
    
    function routeChange(){
        window.location.href = props.url
    }

    let img;
    if(props.img == null){
        img = <img src = {imageMap[props.source]} alt = {props.alt}/>
    }
    else{
        img = <img src = {props.img} alt = {props.alt}/>
    }

    return(
            <div id = 'artikkel' onClick={routeChange}>

                <div className = 'bildeKlasse'>
                    {img}
                </div>
                <div className = 'tittelNyhet'>
                    <h3>{props.headline}</h3>
                </div>
            </div>
    )
}