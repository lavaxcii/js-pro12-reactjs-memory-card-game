import React, { useState } from 'react';
import './index.css';
import cardsData from './json/cards';

function App() {
  const [cards, setCards] = useState([...cardsData]);
  const [initialCardsOrder, setInitialCardsOrder] = useState([...cardsData]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  // const [clickedCardId, setClickedCardId] = useState(null);

  const shuffleCards = () => {
    let mutateCards = [...cards]
    // shuffle cards
    const rng = () => {
      return Math.floor(Math.random() * (8 - 0) + 0);
    };
    let newCardsOrder = [];
    for (let i = 0; i <= 8; i++) {
      let randomIndex = rng();
      do {
        randomIndex = rng();
      } while (randomIndex >= mutateCards.length)
      let itemForShuffle = mutateCards.splice(randomIndex, 1);
      newCardsOrder.push(itemForShuffle[0]);
    };
    setCards([...newCardsOrder]);
  };

  const updateSetCards = (cardIdValue, cardObject) => {
    let mutateCards = [...cards];
    if (cardObject.clicked === true) {
      mutateCards = [...initialCardsOrder];
      for (let i = 0; i <= 8; i ++) {
        mutateCards[i].clicked = false;
      };
      setCards([...mutateCards]);
      if (currentScore >= bestScore) {
        setBestScore(currentScore);
        setCurrentScore(0);
      } else {
        setCurrentScore(0);
      };
    } else {
      //* this should not work
      //* but it works
      //* anyway, this doesn't seem right, revisit and refactor
      cardObject.clicked = true;
      setCurrentScore(currentScore + 1);
      setCards([...mutateCards]);
      shuffleCards();
    };
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-400 to-blue-800">
      <div className="text-2xl flex flex-row items-start pb-10 pr-10 pt-10 space-x-4">
        <p>current score: {currentScore}</p>
        <p>best score:{bestScore}</p>
      </div>
      <div className="m-2 pb-20 grid gap-4 grid-cols-3 grid-rows-3 items-center">
        {cards.map(card => {
          return (
            <div className='text-xl text-white flex flex-col content-start items-center justify-start bg-gradient-to-r from-slate-300 to-slate-800 border-slate-200 border-solid border-8  hover:text-green-400 hover:from-slate-500 hover:to-black hover:border-green-500 hover:border-solid hover:border-8' key={card.id} onClick={() => updateSetCards(card.id, card)}>
              <p>Card #{card.id}</p>
              <img src={card.gallery} alt="" className='h-[162px] w-[243px]' />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;