import React, { useState, useEffect } from 'react';
import './index.css'
import GameContainer from './components/GameContainer';

function App() {
  // here be vanilla JS with a twist (you add JSX conditionaly ex. in array)
  // and then wheter data or JSX are stored in variable directly or in array
  // you 'push' them to return below to (re)render on component
  
  // 'funkcija' koja će na svakom re-renderu (a koji će ujedno biti reshuffle)
  // provjeravati da li su sve karte kliknute


  // ustvari mi ovdje dole treba useEffect jer svaki puta kada numberOfCardsClicked se promjeni ovo dole treba da se odigra ponovo sa rngem i ponovno presloži karte - s time da treba napraviti da kada ponovno presloži karte da 'ne zaboravi' jel karta kliknuta ili ne
  // ODNOSNO, dovoljno bi bilo da se samo promjeni indeks pozicije u arrayu, na taj način se promjeni raspored mjesta BEZ da se ovo dole mora ponovno odigrati - jer, pazi, imaš gore cards arraya i samo trebaš shufflovati mjesta indeksa, nema potrebe da brišeš cijeli arraya i praviš novi, na taj način bi bilo 'zaboravljeno' jel karta stisnuta ili ne

  return (
    <div className='bg-yellow-400'>
      <GameContainer />
    </div>
  );
}

export default App;
