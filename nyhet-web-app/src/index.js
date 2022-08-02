import React from 'react'
import ReactDom from 'react-dom'
import "./style.css"
import Header from './header.js'
import Content from './content.js'
import {useState, useEffect } from "react";
import {db} from './Firebase'
import {collection, getDocs} from 'firebase/firestore'


function Page(){

  return(
    <>
      <Header/>
      <Content/>
    </>
  )
}

ReactDom.render(<Page/>, document.getElementById('root'))