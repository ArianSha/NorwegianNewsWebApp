import React from 'react'
import { useState, useEffect } from "react";
import Article from './article'
import { db } from './firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'


export default function Content() {

    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        const reference = collection(db, "articles");
        
        async function getDocuments () {

            const q = query(reference, orderBy("timestamp", "desc"))
            const docsSnap = await getDocs(q);
            setArticles(docsSnap.docs.map(doc => doc.data()));
        };
        getDocuments();
    }, [])

    
    return (
        <div id = 'content'>
            {articles.map(({ headline, url, image, source }) => (
                <Article key = {url} headline = {headline} url = {url} img = {image} source = {source}/>
            ))}
        </div>
    )
}