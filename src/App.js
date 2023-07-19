import React, { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';
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
      <div className="text-xl text-white min-w-fit flex flex-col content-start items-start justify-start text-center' p-5 mt-5 mb-2 bg-gradient-to-r from-green-600 to-green-800 border-slate-200 border-solid border-2 rounded-full">
        <div className='w-full flex flex-row content-start items-start justify-start'><p className='w-full text-start'>CURRENT SCORE: </p><p className='w-10 text-center bg-gradient-to-r from-slate-700 to-black border-slate-500 border-solid border-2 rounded-full'>{currentScore}</p></div>
        <div className='w-full flex flex-row content-start items-start justify-start'><p className='w-full text-start mt-2'>BEST SCORE: </p><p className='w-10 text-center bg-gradient-to-r from-slate-700 to-black border-slate-500 border-solid border-2 rounded-full mt-2'>{bestScore}</p></div>
      </div>
      <m.div key={cardsDataIndex} initial={{ opacity: 0.75 }} animate={{ opacity: 1 }} transition={{ duration: 0.125, ease: "easeInOut" }} className="m-2 pb-20 grid gap-3 grid-cols-3 grid-rows-3 items-center">
        {cardsDataIndex.map(index => {
          return (
            <div className='text-lg text-white flex flex-col content-start items-center justify-start bg-gradient-to-r from-slate-300 to-slate-800 border-slate-200 border-solid border-4 hover:text-green-400 hover:from-slate-500 hover:to-black hover:border-green-500 hover:border-solid hover:border-4' key={cards[index].id} onClick={() => updateSetCards(cards[index].id, cards[index])}>
              <p>Card #{cards[index].id}</p>
              <img src={cards[index].gallery} alt="" className='lg:h-[142px] lg:w-[223px] h-[112px] w-[192px]' />
            </div>
          )
        })}
      </m.div>
      <p className='text-white'>Best viewed at 900x1200 resolution and higher.</p>
    </div>
  );
}

export default App;