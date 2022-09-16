import React from 'react'
import {Link} from 'react-router-dom'
// import headline from './images/headline.png'
import './styles/header.css'

export default function Header(){
  
  return (
      <nav id = 'header'>
        <div></div>
        <div id = 'headerTitleParent'><Link to="/"><h1 id='headerTitle'>Norske Nyheter</h1></Link></div>
        <div id = 'aboutLink'><Link to="/about" id='aboutTitle'>About</Link></div>
      </nav>
  )
}
