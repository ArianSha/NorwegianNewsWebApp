import React from "react";
import {useState, useEffect } from "react";
import {db} from './Firebase'
import {collection, doc, getDoc, getDocs} from 'firebase/firestore'
import { async } from "@firebase/util";




export default function Artikkel(props){
    
    useEffect(() => {
        const funki = async() => {
            const docRef = doc(db, "artikler", "SRiovcuCZSrsu6P8mJwu");
            const docSnap = await getDoc(docRef);
            console.log(docSnap)

        };
        funki()
    }, []);

    
    
    // const artikler = collection(db, "artikler");
    // console.log(artikler.getDocs())

    // const referanse = await artikler.get();

    // console.log(getDoc(referanse))

    return(
        <div id = 'artikkel'>

            <div class = 'bildeKlasse'>
                <img src = {props.img} alt = {props.alt}/>
            </div>
            <div class = 'tittelNyhet'>
                <h3>{props.tittel}</h3>
            </div>
            
        </div>
    )
}