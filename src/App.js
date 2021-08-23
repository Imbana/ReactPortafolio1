import Intro from "./components/intro/Intro"
import Topbar from "./components/topbar/Topbar";
import Works from './components/works/Works';
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import React,{useState} from 'react'
import Menu from "./components/menu/Menu";

import "./app.scss";
function App() {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className="App">
      <Topbar activeMenu={activeMenu} setActiveMenu={setActiveMenu}></Topbar>
      <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu}></Menu>
      <section className="sections">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Testimonials></Testimonials>
        <Works></Works>
        <Contact></Contact>
      </section>
    </div>
  );
}

export default App;
