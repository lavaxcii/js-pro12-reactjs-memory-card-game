import React, { useState, useEffect } from 'react';
import '../styles/MemoryCardStyles.css';

function MemoryCard(props) {
  // here be JS/JSX logic
  // treba ti 12 karti
  // svaka karta treba efektivno biti objekt koji sadrži par propertisa,
  // neke metode - treba nam rng generator koji će shufflovati karte nakon
  // svakog klika

  // treba mi useState za neke vrijednosti
  // treba mi properties/prop clicked, allClicked 
  // treba mi 'metoda' koja će provjeravati ono prethodno i updateati
  // skorove shodno tome

  // let cards = [];
  // for (let i = 0; i <= 15; i++) {
  //   let keyNr = i;
  //   let card = <p key={keyNr}>I'm beautifull and strong! {i}</p>;
  //   cards.push(card);
  // }
  const [cardClicked, setCardClicked] = useState(false);
  const changeCardClicked = () => {
    console.log('CARD CLICKED ' + (props.id + 1))
    console.log('CARD STATUS ' + cardClicked)
    if (cardClicked === false) {
      console.log('ITs trully clicked now!')
      setCardClicked(true);
      document.querySelector(`.memoryCardItem${props.id}`).classList.add('text-red-400','border-solid','border-4','border-red-500');
    } 
    // else if (cardClicked === null) {
    //   props.resetGame();
    // }
  };
  

  return (
    <div className={props.class} onClick={() => changeCardClicked()}>
      {/* <img src="" alt="" /> */}
      {props.text}
    </div>
    
  )
}
export default MemoryCard