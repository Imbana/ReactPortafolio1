import React from 'react'
import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

const Topbar = ({activeMenu, setActiveMenu}) => {
  
  // const showMenu = ()=>{
  //   setActiveMenu(!activeMenu)
  // }
    return (
      <div className={activeMenu ? "topbar active" : "topbar"} >
        <nav className="container nav">
          <div className="topbar__logo">
            <a href="#intro">
              Jeison<span>Imba</span>
            </a>

            <div className="itemContainer">
              <Person className="logo__icon"></Person>
              <span>+57 314 444 44 44</span>
            </div>
            <div className="itemContainer">
              <Mail className="logo__icon"></Mail>
              <span>Jeison444444@gmail.com</span>
            </div>
          </div>

          <div onClick={()=>{setActiveMenu(!activeMenu)}} className="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    );
}

export default Topbar
