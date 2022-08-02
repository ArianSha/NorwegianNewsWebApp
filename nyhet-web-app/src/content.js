import React from 'react'
import Artikkel from './Artikkel'
import bilde from './images/norskeFlagg.png'


export default function Content(){
    return(
        <div id = 'content'>
            <Artikkel
                img = {bilde}
                tittel = "mann 20 dreper kvinne 45 "
                alt = "bilde av mann"
            />
            <Artikkel
                img = {bilde}
                tittel = "mann 20 dreper kvinne 45 "
                alt = "bilde av mann"
            />
            <Artikkel
                img = {bilde}
                tittel = "mann 20 dreper kvinne 45 "
                alt = "bilde av mann"
            />
            <Artikkel
                img = {bilde}
                tittel = "mann 20 dreper kvinne 45 "
                alt = "bilde av mann"
            />
        </div>
    )
}