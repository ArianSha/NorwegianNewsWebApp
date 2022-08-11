import React from "react";
import {useState, useEffect } from "react";
import {db} from './Firebase'
import {collection, doc, getDoc, getDocs} from 'firebase/firestore'


export default function Artikkel(props){
    
    return(
        <div id = 'artikkel'>

            <div className = 'bildeKlasse'>
                <img src = {props.img} alt = {props.alt}/>
            </div>
            <div className = 'tittelNyhet'>
                <h3>{props.tittel}</h3>
            </div>
            
        </div>
    )
}