import React from "react";
import tv2 from "./images/tv2.png";
import nrk from "./images/nrk.jpg";
import vg from "./images/vg.png";
import e24 from "./images/e24.png";
import { useRef } from "react";
import { useEffect } from "react";
import { observeElement } from "./observer";

const imageMap = {
    "tv2": tv2,
    "nrk": nrk,
    "vg": vg,
    "e24": e24
}

export default function Article(props){

    const myRef = useRef()
    useEffect(() => {
        observeElement(myRef.current)
    })

    let img;
    if(props.img == null){
        img = <img class='thumbnail' src = {imageMap[props.source]} alt = {props.alt}/>
    }
    else{
        img = <img class='thumbnail' src = {props.img} alt = {props.alt}/>
    }

    return(
        <a href={props.url} class='article hidden' ref={myRef}>
            <div>
                {img}
            </div>
            <div>
                <img class = 'sourceLogo' src={imageMap[props.source]} alt="" />
                <h3 class = 'articleHeadline'>{props.headline}</h3>
            </div>
        </a>
    )
}