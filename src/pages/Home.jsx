import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles.css";

import ButtonOutlineDynamic from "../assets/svg/ButtonOutlineDynamic";
import Button from "../components/Button";
import Header from "../components/Header";
import Specs from "./Specs";
import CardSpecs from "../assets/svg/CardSpecs";
import Footer from "../components/Footer";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <div className="pb-[2.75rem] flex lg:gap-10 lg:justify-evenly mb:flex-col md:mt-10 mb:justify" >
        <CardSpecs id="1" size={25} />
        {/* <CardSpecs id="2" size={25} /> */}
        <CardSpecs id="0" size={25} />
      </div>
      <div>
      <Footer />
      </div>
    </>
  );
};

export default App;
