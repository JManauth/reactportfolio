import React from 'react'
import {Link} from 'react-router-dom';
// import {Layout, Header, Navigation} from 'react-mdl'


const HeaderComponent = () => {
  return (
      
      
       <div className="header">
          <div>
            <Link className="name" to="/">Jafet Manauth</Link>
          </div>
          <div className="header-links">
            <Link to='/projects' className="header-link">Projects</Link>
            <Link to='/about'className="header-link">About</Link>
            <Link to='/contact'className="header-link">Contact</Link>
          </div>
        </div>
       
    
    
  )
}

export default HeaderComponent

