import React from 'react'
import {Link} from 'react-router-dom'
import headline from './images/headline.png'

export default function Header(){
  
  return (
      <nav id = 'header'>

        <Link to="/" id = 'title'><img src={headline} alt="" /></Link>
        {/* <div id = 'headline'><Link to="/" id = 'title'><img src={headline} alt="" /></Link></div> */}
        <Link to="/about" id = 'aboutLink'>About</Link>
      </nav>
  )
}
