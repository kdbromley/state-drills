import React from 'react';
import './App.css';
import RouletteGun from './state-drills/RouletteGun'
import HelloWorld from './state-drills/HelloWorld'
import Bomb from './state-drills/Bomb'

function App() {
  return (
    <main className='App'>
      <RouletteGun bulletInChamber={8}/>
      <hr />
      <HelloWorld />
      <hr />
      <Bomb />
    </main>
  );
}


export default App;