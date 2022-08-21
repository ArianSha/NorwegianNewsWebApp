import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(){
  
  return (
      <nav id = 'header'>
        <Link to="/" id = 'title'>Norske Nyheter</Link>
        <Link to="/about" id = 'aboutLink'>About</Link>
      </nav>
  )
}
