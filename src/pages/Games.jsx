import "../styles.css";
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DividerText from "../components/DividerText.jsx";
import { gamesList } from './games.js';
import SvgBorder from './SvgBorder'; // Adjust the path as needed

const Games = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <DividerText text={"Список ігор"} />
        <div className="mt-16 mb-16 flex flex-wrap justify-center">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 text-color-9">
            {gamesList.map((game, index) => (
              <div className="hover:scale-110 transform transition-transform duration-500">
                <SvgBorder key={index}>
                  <div className="noselect flex items-center gap-2 ">
                    <img src={game.logo} alt={game.name} className="w-12 h-12 mr-2" />
                    <span className="text-2xl">{game.name}</span>
                  </div>
                </SvgBorder>
              </div>
            ))}
            <div className="noselect w-full m-4 text-xl">
              * та багато інших
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Games;
