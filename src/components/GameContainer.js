import { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";
import Score from "./Score";

function GameContainer() {
  const [score, setScore] = useState(0)
  const updateScore = (cardId) => {
    setScore(prev => prev + 1);
  };
  const [bestScore, setBestScore] = useState(0)
  const updateBestScore = () => {
    setBestScore(score);
  }
  const [clickedStatus, setClickedStatus] = useState(false);
  const updateClickedStatusParent = () => {
    setBestScoreStatus(false);
  }
  const [bestScoreStatus, setBestScoreStatus] = useState(0)
  const updateBestScoreStatus = () => {
    setBestScoreStatus(prev => prev + 1);
    // setBestScoreStatus(false);
    setScore(0);
    for (let i = 0; i < 9; i++) {
      document.querySelector(`.memoryCardItem${i}`).classList.remove('text-red-400','border-solid','border-4','border-red-500');
    }
  }

  // const [resetClicked, setResetClicked] = useState(false);
  // const resetClickedStatus = () => {

  // }

  // const [cards, setCards] = useState()
  let cardsData = [{
        key: 0,
        class: `memoryCardItem0`,
        id: 0,
        gallery: `#1`
      },
      {
        key: 1,
        class: `memoryCardItem1`,
        id: 1,
        gallery: `#2`
      },
      {
        key: 2,
        class: `memoryCardItem2`,
        id: 2,
        gallery: `#3`
      },
      {
        key: 3,
        class: `memoryCardItem3`,
        id: 3,
        gallery: `#4`
      },
      {
        key: 4,
        class: `memoryCardItem4`,
        id: 4,
        gallery: `#5`
      },
      {
        key: 5,
        class: `memoryCardItem5`,
        id: 5,
        gallery: `#6`
      },
      {
        key: 6,
        class: `memoryCardItem6`,
        id: 6,
        gallery: `#7`
      },
      {
        key: 7,
        class: `memoryCardItem7`,
        id: 7,
        gallery: `#8`
      },
      {
        key: 8,
        class: `memoryCardItem8`,
        id: 8,
        gallery: `#9`
      }
  ];

  const [cardsDataIndex, setCardsDataIndex] = useState(
    cardsData.map((value, index) =>  index )
  )

  const shuffleCards = (cardId) => {
    console.log('we shufflin')
    let prevNumber = cardId;
    let tempArr = cardsDataIndex;
    let newCardsDataIndex = []
    for (let i = 0; tempArr.length > 0 ; i++) {
      let rng;
      do {
        rng = Math.floor(Math.random() * 9) + 0;
      } while (prevNumber === rng);
      prevNumber = rng;
      let spliceItem = tempArr.splice(rng, 1);
      if (spliceItem[0] !== undefined) {
        newCardsDataIndex.push(spliceItem[0]);
      }
    }
    console.table(newCardsDataIndex)
    setCardsDataIndex(newCardsDataIndex)
    console.table(cardsDataIndex)
  }

  return (
    <div className="min-h-screen flex flex-col items-center pb-10">
      <Score score={score} bestScore={bestScore} />
      <div className="text-4xl w-[1000px] h-[450px] grid gap-4 grid-cols-3 grid-rows-3 bg-green-600">
        {cardsDataIndex.map((index) => {
          return (
            <MemoryCard key={cardsData[index].key} class={cardsData[index].class} id={cardsData[index].id} gallery={cardsData[index].gallery} updateScore={updateScore} updateBestScore={updateBestScore} bestScoreStatus={bestScoreStatus} updateBestScoreStatus={updateBestScoreStatus} clickedStatus={clickedStatus} updateClickedStatusParent={updateClickedStatusParent} shuffleCards={shuffleCards} />
          )
        })
        }
      </div>
    </div>
  )
}
export default GameContainer

