import React, { useState,useEffect } from 'react'
import './portfolio.scss'
import PortfolioList from "./portfolioList/PortfolioList";
import {featuredPortfolio,webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio} from "./../../data"

const Portfolio = () => {

const [select, setSelect] = useState("featured");
const [cards, setCards] = useState([]);

const list = [
  {
    id: "featured",
    title: "Featured",
  },
  {
    id: "web",
    title: "Web App",
  },
  {
    id: "mobile",
    title: "Mobile App",
  },
  {
    id: "Design",
    title: "Design",
  },
  {
    id: "branding",
    title: "Branding",
  },
];

useEffect(() => {

    switch (select) {

      case "featured":
        setCards(featuredPortfolio);
        break;
      case "web":
        setCards(webPortfolio);
        break;
      case "mobile":
        setCards(mobilePortfolio);
        break;
      case "Design":
        setCards(designPortfolio);
        break;
      case "branding":
        setCards(contentPortfolio);
        break;
      default: break;
    }
}, [select])
    return (
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList
              key={item.id}
              item={item}
              active={select === item.id}
              setSelect={setSelect}
            ></PortfolioList>
          ))}
        </ul>
        <div className="container">
          {cards.map((item) => (
              <div key = {item.id} className="item">
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
              </div>
              ))
          }
        </div>
      </div>
    );
}

export default Portfolio
