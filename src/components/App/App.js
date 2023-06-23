import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import CardsContainer from '../CardsContainer/CardsContainer';
import Line from '../Line/Line';
import Line2 from '../Line2/Line2';
import FullInfo from '../FullInfo/FullInfo';
import Form from '../Form/Form';



const App = () => {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Line />
      <CardsContainer />
      <Line2 />
      <FullInfo />
      <Form />

      <Footer />
    </div>
  );
};

export default App;
