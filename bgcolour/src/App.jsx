import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [colour, setColour] = useState("black");

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:colour}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button 
            onClick={()=>setColour("red")}
            className='outline-none px-4 py-4  tex rounded-full text-white shadow-lg'
            style={{backgroundColor:"red"}}>RED</button>
            <button 
            onClick={()=>setColour("green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"green"}}>GREEN</button>
            <button 
            onClick={()=>setColour("blue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"blue"}}>BLUE</button>
            <button 
            onClick={()=>setColour("olive")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"olive"}}>OLIVE</button>
            <button 
            onClick={()=>setColour("gray")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"gray"}}>GRAY</button>
            <button 
            onClick={()=>setColour("yellow")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"yellow"}}>YELLOW</button>
            <button 
            onClick={()=>setColour("pink")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"pink"}}>PINK</button>
            <button 
            onClick={()=>setColour("purple")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"purple"}}>PURPLE</button>
            <button 
            onClick={()=>setColour("lavender")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"lavender"}}>LAVENDER</button>
            <button 
            onClick={()=>setColour("white")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"white"}}>WHITE</button>
            <button 
            onClick={()=>setColour("black")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"black"}}>BLACK</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
