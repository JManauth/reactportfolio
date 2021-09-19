import React from 'react'
import {Link} from 'react-router-dom';
// import {Layout, Header, Navigation} from 'react-mdl'


const HeaderComponent = () => {
  return (
      
      
       <div className="header">
          <div>
            <h1>Jafet Manauth</h1>
          </div>
          <div className="header-links">
            <Link to='/projects'>Projects</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
       
    
    
  )
}

export default HeaderComponent

