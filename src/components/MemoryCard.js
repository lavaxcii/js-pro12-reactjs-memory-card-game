import React, { useState, useEffect } from 'react';

function MemoryCard(props) {
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
    </div>
    
  )
}
export default MemoryCard