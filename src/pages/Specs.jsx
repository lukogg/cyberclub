// Home.jsx
import React from "react";
import Header from "../components/Header";
import CardSpecs from "../assets/svg/CardSpecs";

const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <div className="mt-20 flex gap-10 justify-center">
        <CardSpecs id="1" size={25} />
        <CardSpecs id="2" size={25} />
        <CardSpecs id="0" size={25} />
      </div>
    </>
  );
};

export default Home;
