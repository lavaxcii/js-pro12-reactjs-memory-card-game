import React, { useState } from 'react';
import './index.css';

function App() {
  const [cards, setCards] = useState(
    [{
      key: 0,
      clicked: false,
      id: 0,
      gallery: require('../src/img/bulma.jpg')
    },
    {
      key: 1,
      clicked: false,
      id: 1,
      gallery: require('../src/img/goku1.jpg')
    },
    {
      key: 2,
      clicked: false,
      id: 2,
      gallery: require('../src/img/goku2.jpg')
    },
    {
      key: 3,
      clicked: false,
      id: 3,
      gallery: require('../src/img/goku3.jpg')
    },
    {
      key: 4,
      clicked: false,
      id: 4,
      gallery: require('../src/img/goku4.jpg')
    },
    {
      key: 5,
      clicked: false,
      id: 5,
      gallery: require('../src/img/krilin.jpg')
    },
    {
      key: 6,
      clicked: false,
      id: 6,
      gallery: require('../src/img/krme.jpg')
    },
    {
      key: 7,
      clicked: false,
      id: 7,
      gallery: require('../src/img/malibijeli.jpg')
    },
    {
      key: 8,
      clicked: false,
      id: 8,
      gallery: require('../src/img/pikolo.jpg')
    }
    ]
  );
  // const [changeClickedStatus, setChangeClickedStatus] = useState(null)

  const updateSetCards = (cardIdValue) => {
    // trebaš spread operator iskoristiti da ostatak arraya preneseš!
    setCards(cards[cardIdValue].clicked = true);
  };
  console.table(cards);

  // let cardsToMap = cards;

  // stateovi za karte
  // funkcije/metode za praćenje trenutnih bodova
  // i za najvećeg broja bodova, te za mješanje karti
  // arraya objekata (u stateu?) podataka o kartama

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-200 to-blue-300">
      <div className="text-2xl flex flex-row items-start pb-10 pr-10 pt-10 bg-gradient-to-r from-blue-400 to-blue-200">
        <p>current score: </p>
        <p>best score: </p>
      </div>
      <div className="m-2 pb-20 grid gap-4 grid-cols-3 grid-rows-3 items-center">
        {cards.map(card => {
          return (
            <div className='text-xl text-white flex flex-col content-start items-center justify-start bg-gradient-to-r from-slate-300 to-slate-800 border-slate-200 border-solid border-8  hover:text-green-400 hover:from-slate-500 hover:to-black hover:border-green-500 hover:border-solid hover:border-8' key={card.id} onClick={() => updateSetCards(card.id)}>
              <p>Card #{card.id + 1}</p>
              <img src={card.gallery} alt="" className='h-[162px] w-[243px]' />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;