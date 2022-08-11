import React from 'react'
import Artikkel from './Artikkel'
import bilde from './images/norskeFlagg.png'
import { useState, useEffect } from "react";
import { db } from './Firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'


export default function Content() {

    const [artikler, setArtikler] = useState([]);
    const [bilde, setBilde] = useState();
    const [tekst, setTekst] = useState([]);

    const referanse = collection(db, "artikler");
    const data = doc(referanse, 'SRiovcuCZSrsu6P8mJwu');

    (async function () {

        const docSnap = await getDoc(data);
        const liste = await docSnap.data().artiklerInfo

        setBilde(liste[0].image)
        setTekst(liste[0].headline)
    })()
    
    // useEffect(() => {
    //     (async function () {
            
    //         const docSnap = await getDoc(data);
    //         const liste = await docSnap.data().artiklerInfo
            
    //         setTekst(liste[0].headline)
    //         setBilde(liste.image)
    //     })()
        
    // }, [])
    
    
    
    return (
        <div id='content'>

            <Artikkel
                img={bilde}
                tittel={tekst}
            />
            <Artikkel
                img={bilde}
                tittel={tekst}
            />
            <Artikkel
                img={bilde}
                tittel={tekst}
            />
            <Artikkel
                img={bilde}
                tittel={tekst}
            />
            <Artikkel
                img={bilde}
                tittel={tekst}
            />
            
            <Artikkel
                img={bilde}
                tittel="mann 20 dreper kvinne 45 "
                alt="bilde av mann"
            />
        </div>
    )
}