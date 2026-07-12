import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter,setCounter]=useState(15)

  const addValue= () =>{
    if(counter<30) setCounter(counter+1);
  }
  const removeValue= () =>{
    if(counter>0){
      setCounter(counter-1);
    }
  }
  return (
    <>
      <h1> Click counter</h1>
      <h2> counter value : {counter}</h2>
      <button onClick={addValue}> ADD VALUE </button>
      <br/>
      <button onClick={removeValue}> REMOVE VALUE </button>
    </>
  )
}

export default App
