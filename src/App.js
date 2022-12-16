import React, { useState, useEffect } from 'react';
import Score from './components/Score';
import MemoryCard from './components/MemoryCard';
import './styles/GlobalStyle.css';
import './styles/MemoryCardStyles.css';

function App() {
  // here be vanilla JS with a twist (you add JSX conditionaly ex. in array)
  // and then wheter data or JSX are stored in variable directly or in array
  // you 'push' them to return below to (re)render on component
  const [numberOfCardsClicked, setnumberOfCardsClicked] = useState(0);
  const updateNumberOfCardsClicked = () => {
    setnumberOfCardsClicked(numberOfCardsClicked + 1)
  };

  let cards = [];
  // ovdje ti treba array sa slikama
  let gallery = ['#1', '#2', '#3', '#4', '#5', '#6']
  // ustvari mi ovdje dole treba useEffect jer svaki puta kada numberOfCardsClicked se promjeni ovo dole treba da se odigra ponovo sa rngem i ponovno presloži karte - s time da treba napraviti da kada ponovno presloži karte da 'ne zaboravi' jel karta kliknuta ili ne
  // ODNOSNO, dovoljno bi bilo da se samo promjeni indeks pozicije u arrayu, na taj način se promjeni raspored mjesta BEZ da se ovo dole mora ponovno odigrati - jer, pazi, imaš gore cards arraya i samo trebaš shufflovati mjesta indeksa, nema potrebe da brišeš cijeli arraya i praviš novi, na taj način bi bilo 'zaboravljeno' jel karta stisnuta ili ne
  for (let i = 0; i <= 5; i++) {
    let keyNr = i;
    let card = <MemoryCard key={keyNr} text={`I'm beautifull and strong!${i}`} updateNumberOfCardsClicked={updateNumberOfCardsClicked} numberOfCardsClicked={numberOfCardsClicked} gallery={gallery} id={keyNr}></MemoryCard>;
    cards.push(card);
  }

  // 'funkcija' koja će na svakom re-renderu (a koji će ujedno biti reshuffle)
  // provjeravati da li su sve karte kliknute
  

  return (
    <div className='mainContainer'>
      <Score></Score>
      <div className="cardContainer">
        {cards}
      </div>
    </div>
  );
}

export default App;
