import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import CardsContainer from '../CardsContainer/CardsContainer';
import Line from '../Line/Line';
import Line2 from '../Line2/Line2';
import FullInfo from '../FullInfo/FullInfo';
import LastSections from '../LastSections/LastSections';
import { Element } from 'react-scroll';
import useReveal from '../../hooks/useReveal';



const App = () => {
  useReveal();

  return (
    <div className='App' styles="overflow-x: hidden;">
      <Header />
      <Hero />
      <Line />
      <Element name="cardsContainer" className="element">
        <CardsContainer />
      </Element>
      <Line2 />
      <Element name="fullInfo" className="element">
        <FullInfo />
      </Element>
      <Element name="lastSections" className="element">
        <LastSections />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
