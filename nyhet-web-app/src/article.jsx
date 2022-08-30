import React from "react";
import tv2 from "./images/tv2.png";
import nrk from "./images/nrk.jpg";
import vg from "./images/vg.png";
import e24 from "./images/e24.png";

const imageMap = {
    "tv2": tv2,
    "nrk": nrk,
    "vg": vg,
    "e24": e24
}

export default function Article(props){
    
    let img;
    if(props.img == null){
        img = <img id='thumbnail' src = {imageMap[props.source]} alt = {props.alt}/>
    }
    else{
        img = <img id='thumbnail' src = {props.img} alt = {props.alt}/>
    }

    return(
        <a href={props.url} id='article'>
            <div>
                {img}
            </div>
            <div>
                <img id = 'sourceLogo' src={imageMap[props.source]} alt="" />
                <h3 id = 'articleHeadline'>{props.headline}</h3>
            </div>
        </a>
    )
}