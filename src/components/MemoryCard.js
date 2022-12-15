import '../styles/MemoryCardStyles.css'

function MemoryCard() {
  // here be JS/JSX logic
  // treba ti 12 karti
  // svaka karta treba efektivno biti objekt koji sadrži par propertisa,
  // neke metode - treba nam rng generator koji će shufflovati karte nakon
  // svakog klika

  // treba mi useState za neke vrijednosti
  // treba mi properties/prop clicked, allClicked 
  // treba mi 'metoda' koja će provjeravati ono prethodno i updateati
  // skorove shodno tome
  let cards = [];
  for (let i = 0; i <= 15; i++) {
    let keyNr = i;
    let card = <p key={keyNr}>I'm beautifull and strong! {i}</p>;
    cards.push(card);
  }
  console.log(cards)
  return (
    // here be all cards through (JSX filled) array
    <div className='cardContainer'>
      {cards}
    </div>
    
  )
}
export default MemoryCard