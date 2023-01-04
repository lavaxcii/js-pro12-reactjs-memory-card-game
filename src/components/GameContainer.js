import { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";
import Score from "./Score";

function GameContainer() {
  const shuffleCards = (cardId) => {
    let prevNumber = cardId;
    let newCards = []
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

    }

  }

  let cards = [];
  const createCards = () => {
    for (let i = 0; i <= 8; i++) {
      let keyNr = i;
      let card = <MemoryCard key={keyNr} class={`memoryCardItem${i}`} id={i} gallery={`#${i}`} ></MemoryCard>;
      cards.push(card);
    }
  }

  // vako: napravi opet taj array komponenti, prikaži ih, ALI neka bude ovdje 
  // state za clicked!! jer kada napraviš više komponenti koje "dijele" state
  // one ustvari ne dijele, nego svaka "instanca" komponente ima svoje state
  // tebi piše kao jedan, ali svaka komponenta ima svoj (v. react dokumentaciju)

  return (
    <div className="min-h-screen flex flex-col items-center pb-10">
      <Score createCards={createCards} />
      <div className="text-4xl w-[1000px] h-[450px] grid gap-4 grid-cols-3 grid-rows-3 bg-green-600">
        { cards }
      </div>
    </div>
  )
}
export default GameContainer

