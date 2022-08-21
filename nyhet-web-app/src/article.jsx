import React from "react";

export default function Article(props){

    function routeChange(){
        window.location.href = props.url
    }

    return(
            <div id = 'artikkel' onClick={routeChange}>

                <div className = 'bildeKlasse'>
                    <img src = {props.img} alt = {props.alt}/>
                </div>
                <div className = 'tittelNyhet'>
                    <h3>{props.headline}</h3>
                </div>
            </div>
    )
}