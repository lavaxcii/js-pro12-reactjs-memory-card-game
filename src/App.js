import React, { useState } from 'react';
import './index.css';
import cardsData from './json/cards';

function App() {
  const [cards, setCards] = useState([...cardsData]);
  const [cardsDataInitialIndex, setcardsDataInitialIndex] = useState(
    cardsData.map((value, index) =>  index )
  )
  const [cardsDataIndex, setCardsDataIndex] = useState(
    cardsData.map((value, index) =>  index )
  )
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const updateSetCards = (cardIdValue, cardObject) => {
    let mutateCardsIndex = [...cardsDataIndex];
    let cardsClickedStatus = [...cards]
    if (cards[cardIdValue].clicked === true) {
      mutateCardsIndex = [...cardsDataInitialIndex];
      for (let i = 0; i <= 8; i ++) {
        cardsClickedStatus[i].clicked = false;
      };
      setCardsDataIndex([...mutateCardsIndex]);
      setCards([...cardsClickedStatus]);
      if (currentScore >= bestScore) {
        setBestScore(currentScore);
        setCurrentScore(0);
      } else {
        setCurrentScore(0);
      };
    } else {
      cardsClickedStatus[cardIdValue].clicked = true;
      setCurrentScore(currentScore + 1);
      setCards([...cardsClickedStatus]);
      shuffleCards();
    };
  };

  const shuffleCards = () => {
    let mutateCardsIndex = [...cardsDataIndex];
    // shuffle cards
    const rng = () => {
      return Math.floor(Math.random() * (8 - 0) + 0);
    };
    let newCardsIndexOrder = [];
    for (let i = 0; i <= 8; i++) {
      let randomIndex = rng();
      do {
        randomIndex = rng();
      } while (randomIndex >= mutateCardsIndex.length)
      let itemForShuffle = mutateCardsIndex.splice(randomIndex, 1);
      newCardsIndexOrder.push(itemForShuffle[0]);
    };
    setCardsDataIndex([...newCardsIndexOrder]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-400 to-blue-800">
      <div className="text-2xl flex flex-row items-start pb-10 pr-10 pt-10 space-x-4">
        <p>current score: {currentScore}</p>
        <p>best score:{bestScore}</p>
      </div>
      <div className="m-2 pb-20 grid gap-4 grid-cols-3 grid-rows-3 items-center">
        {cardsDataIndex.map(index => {
          return (
            <div className='text-xl text-white flex flex-col content-start items-center justify-start bg-gradient-to-r from-slate-300 to-slate-800 border-slate-200 border-solid border-8  hover:text-green-400 hover:from-slate-500 hover:to-black hover:border-green-500 hover:border-solid hover:border-8' key={cards[index].id} onClick={() => updateSetCards(cards[index].id, cards[index])}>
              <p>Card #{cards[index].id}</p>
              <img src={cards[index].gallery} alt="" className='h-[162px] w-[243px]' />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;