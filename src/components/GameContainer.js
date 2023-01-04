import { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";
import Score from "./Score";

function GameContainer() {
  // const [displayCards, setDisplayCards] = useState([]);
  const [cards, setCards] = useState([]);
  const gallery = ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9']
  const [numberOfCardsClicked, setnumberOfCardsClicked] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  // const numberOfCardsClickedPrev;
  let newCards = []
  // let emptyCards = [];
  // let clickedCardId;
  
  const shuffleCards = (cardId) => {
    let prevNumber = cardId;
    // console.log('card id is in SHUFFLECARDS: ' + cardId)
    // let cardsMirror = newCards;
    console.log('Cards BEFORE: ' + cards)
    console.log('newCards BEFORE: ' + newCards)
    
    newCards = []
    console.log('newCards AFTER: ' + newCards)
    for (let i = 0; cards.length > 0 ; i++) {
      let rng;
      do {
        rng = Math.floor(Math.random() * 9) + 0;
      } while (prevNumber === rng);
      prevNumber = rng;
      let spliceItem = cards.splice(rng, 1);
      if (spliceItem[0] !== undefined) {
        newCards.push(spliceItem[0]);
      }
      console.log('newCards in MIXER: ' + newCards)
    }
    // cards = newCards;
    console.log('Cards BEFORE setState: ' + cards)
    // setCards([]);
    setCards(newCards);
    console.log("After shuffle1: " + cards);
  }

  useEffect(() => {
      console.log('After shuffle1 thgrouh useEffect: ' + cards);
      console.log('--------------------------------');
  },[cards]);

  const updateNumberOfCardsClicked = (cardId) => {
    // numberOfCardsClickedPrev = numberOfCardsClicked;
    setnumberOfCardsClicked(numberOfCardsClicked + 1);
    if (numberOfCardsClicked >= bestScore) {
      setBestScore(numberOfCardsClicked);
    };
    // clickedCardId = cardId;
    // console.log('card id is in GAMECONTAINER: ' + cardId)
    shuffleCards(cardId);
    // console.log("After shuffle2: " + cards);
    // setDisplayCards([])
    // setDisplayCards([].concat(cards))
    // console.log(displayCards);
  };

  const resetGame = () => {
    setnumberOfCardsClicked(0);
    setCards([]);
  }

  const createCards = () => {
    for (let i = 0; i <= 8; i++) {
      let keyNr = i;
      let card = <MemoryCard key={keyNr} text={`memoryCardItem${i}`} updateNumberOfCardsClicked={updateNumberOfCardsClicked} resetGame={resetGame} numberOfCardsClicked={numberOfCardsClicked} gallery={gallery[i]} id={keyNr}></MemoryCard>;
      cards.push(card);
    }
  }

  if (cards.length === 0) {
    createCards();
  }

  // useEffect(() => {
  //   shuffleCards(clickedCardId);
  //   // return () => {
  //   //   second
  //   // }
  // })
  
    return (
      <div className="min-h-screen flex flex-col items-center pb-10">
        <Score currentScore={numberOfCardsClicked} bestScore={bestScore} />
        <div className="text-4xl w-[1000px] h-[450px] grid gap-4 grid-cols-3 grid-rows-3 bg-green-600">
          { cards }
        </div>
    </div>
    )
}
export default GameContainer

