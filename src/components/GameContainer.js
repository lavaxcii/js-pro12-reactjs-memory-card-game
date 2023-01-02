import { useState } from "react";
import MemoryCard from "./MemoryCard";
import Score from "./Score";

function GameContainer() {
  const [displayCards, setDisplayCards] = useState([]);
  let cards = []
  const gallery = ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9']
  const [numberOfCardsClicked, setnumberOfCardsClicked] = useState(0);
  // const numberOfCardsClickedPrev;
  let newCards = []
  let emptyCards = [];
  
  const shuffleCards = (cardId) => {
    let prevNumber = cardId;
    newCards = []
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
      console.log(newCards)
    }
    cards = newCards;
  }
  const updateNumberOfCardsClicked = (cardId) => {
    // numberOfCardsClickedPrev = numberOfCardsClicked;
    setnumberOfCardsClicked(numberOfCardsClicked + 1);
    shuffleCards(cardId);
    console.log(cards);
    setDisplayCards([])
    setDisplayCards([].concat(cards))
    console.log(displayCards);

  };

  for (let i = 0; i <= 8; i++) {
    let keyNr = i;
    let card = <MemoryCard key={keyNr} text={`I'm beautifull and strong!${i}`} updateNumberOfCardsClicked={updateNumberOfCardsClicked} numberOfCardsClicked={numberOfCardsClicked} gallery={gallery[i]} id={keyNr}></MemoryCard>;
    cards.push(card);
  }
  
    return (
      <div className="min-h-screen flex flex-col items-center pb-10">
        <Score />
        <div className="text-4xl w-[1000px] h-[450px] grid gap-4 grid-cols-3 grid-rows-3 bg-green-600">
          { displayCards.length === 0 ? cards : displayCards }
        </div>
    </div>
    )
}
export default GameContainer