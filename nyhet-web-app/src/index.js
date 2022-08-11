import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import Header from './Header.js'
import Content from './Content.js'


function Page(){

  return(
    <>
      <Header/>
      <Content/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Page/>
);

// ReactDom.render(<Page/>, document.getElementById('root'))