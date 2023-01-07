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
    if (score <= bestScore) {
      return;
    }
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
        gallery: require('../img/bulma.jpg')
      },
      {
        key: 1,
        class: `memoryCardItem1`,
        id: 1,
        gallery: require('../img/goku1.jpg')
      },
      {
        key: 2,
        class: `memoryCardItem2`,
        id: 2,
        gallery: require('../img/goku2.jpg')
      },
      {
        key: 3,
        class: `memoryCardItem3`,
        id: 3,
        gallery: require('../img/goku3.jpg')
      },
      {
        key: 4,
        class: `memoryCardItem4`,
        id: 4,
        gallery: require('../img/goku4.jpg')
      },
      {
        key: 5,
        class: `memoryCardItem5`,
        id: 5,
        gallery: require('../img/krilin.jpg')
      },
      {
        key: 6,
        class: `memoryCardItem6`,
        id: 6,
        gallery: require('../img/krme.jpg')
      },
      {
        key: 7,
        class: `memoryCardItem7`,
        id: 7,
        gallery: require('../img/malibijeli.jpg')
      },
      {
        key: 8,
        class: `memoryCardItem8`,
        id: 8,
        gallery: require('../img/pikolo.jpg')
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
      <div className="text-4xl w-[782px] h-[535px] grid gap-4 grid-cols-3 grid-rows-3 bg-green-600">
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

