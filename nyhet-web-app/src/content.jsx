import React from 'react'
import { useState, useEffect } from "react";
import Article from './article'
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'


export default function Content() {

    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        const reference = collection(db, "articles");
        
        async function getDocuments () {
            const docsSnap = await getDocs(reference);
            setArticles(docsSnap.docs.map(doc => doc.data()));
        };
        getDocuments();
    }, [])

    
    return (
        <div id = 'content'>
            {articles.map(({ headline, url, image, alt }) => (
                <Article headline = {headline} url = {url} img = {image} alt = {alt}/>
            ))}
        </div>
    )
}