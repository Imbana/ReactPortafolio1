import React,{useEffect,useRef} from 'react'
import './intro.scss'
import { ExpandMore } from "@material-ui/icons";
import { init } from "ityped"



const Intro = () => {

const textRef =useRef()

useEffect(() => {
   init(textRef.current, {
     startDelay: 1500,
     backSpeed:70,
     showCursor: true,
     strings: ["Desarrollador", "diseñador", "Creador de contenido"],
   });
}, [])



    return (
      <div className="intro" id="intro">
        <div className="left">
          <div className="containerImg">
            <img src="assets/man.png" alt="jgh" />
          </div>
        </div>
        <div className="right">
          <h2>Hi there, I'm</h2>
          <h1>Jeison Imbana</h1>
          <div>
            Freelance <span ref={textRef}></span>
          </div>
          <a href="#works">
            <ExpandMore className="expandMore"></ExpandMore>
          </a>
        </div>
      </div>
    );
}

export default Intro

