import React from 'react'
import "./portfolioList.scss"
const portfolioList = ({item, active, setSelect}) => {

    return (
      <>
        <li
          onClick={() => setSelect(item.id)}
          className={active ? "active" : ""}
          key={item.id}
        >
          {item.title}
        </li>
      </>
    );
}

export default portfolioList
