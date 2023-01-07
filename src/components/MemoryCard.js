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
  // const { updateClickedStatusParent } = props;

  const [clicked, setClicked] = useState(props.clickedStatus);
  const updateClickedStatus = (e) => {
    if (clicked === false) {
      // document.querySelector(`.${e.target.classList[0]}`).classList.add('text-red-400','border-solid','border-4','border-red-500');
      props.updateScore(props.id);
    } else {
      props.updateBestScore();
      props.updateBestScoreStatus();
      props.shuffleCards(props.id);
      return;
    };
    setClicked(true);
    props.shuffleCards(props.id);
  };

  useEffect(() => {
    setClicked(false);
  }, [props.bestScoreStatus])

  useEffect(() => {
    console.log('CARD CLICKED ' + (props.id + 1))
    console.log('CARD STATUS ' + clicked)
  })
  
  return (
    <div className={`${props.class} hover:border-solid hover:border-4 hover:border-red-500`} onClick={(e) => {
      updateClickedStatus(e);
      }}>
      <img className='z-4' src={props.gallery} height='250px' width='250px' alt="" />
      {/* {props.gallery} */}
    </div>
    
  )
}
export default MemoryCard