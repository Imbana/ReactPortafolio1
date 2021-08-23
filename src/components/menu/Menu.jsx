import React from 'react'
import "./menu.scss"

const Menu = ({activeMenu, setActiveMenu}) => {
    return (
      <div className={"topbar__menu " + (activeMenu && "active")}>
        <ul>
          <li
            onClick={() => setActiveMenu(!activeMenu)}
            className="topbar__item"
          >
            <a href="#intro" className="topbar__link">
              Inicio
            </a>
          </li>
          <li
            onClick={() => setActiveMenu(!activeMenu)}
            className="topbar__item"
          >
            <a href="#portfolio" className="topbar__link">
              Portafolio
            </a>
          </li>
          <li
            onClick={() => setActiveMenu(!activeMenu)}
            className="topbar__item"
          >
            <a href="#testimonials" className="topbar__link">
              Testimonio
            </a>
          </li>
          <li
            onClick={() => setActiveMenu(!activeMenu)}
            className="topbar__item"
          >
            <a href="#works" className="topbar__link">
              Works
            </a>
          </li>
          <li
            onClick={() => setActiveMenu(!activeMenu)}
            className="topbar__item"
          >
            <a href="#contact" className="topbar__link">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    );
}

export default Menu
