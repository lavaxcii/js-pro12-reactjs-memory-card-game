function Score(props) {
  return (
    <div className="flex flex-row items-center space-x-4 text-4xl italic text-sky-400 bg-black p-5">
      <p>Current score: {props.score}</p>
      <p>Best score: {props.bestScore}</p>
    </div>
  )
}
export default Score