import MemoryCard from "./MemoryCard"


function MemoryCardsContainer(props) {
  return (
    <>
      {props.cards.map((card) => {
        return <div onClick={() => props.updateNumberOfCardsClicked(parseInt(card.cardId))}>
          {/* <img src="" alt="" /> */}
          {card.imageLink}
        </div>
      })}
    </>
  )
}
export default MemoryCardsContainer