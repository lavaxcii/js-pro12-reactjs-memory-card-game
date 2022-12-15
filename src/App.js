import './styles/GlobalStyle.css';
import React from 'react';
import Score from './components/Score';
import MemoryCard from './components/MemoryCard';

function App() {
  // here be vanilla JS with a twist (you add JSX conditionaly ex. in array)
  // and then wheter data or JSX are stored in variable directly or in array
  // you 'push' them to return below to (re)render on component
  return (
    <div className='mainContainer'>
      <Score></Score>
      <MemoryCard></MemoryCard>
    </div>
  );
}

export default App;
