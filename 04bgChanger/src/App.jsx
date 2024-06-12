import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("violet")

  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className=" flex flex-wrap items-center min-h-screen inset-x-0 justify-center">
        <div className="flex flex-wrap shadow-xl bg-white px-3 py-2 rounded-3xl gap-3">
          <button onClick={()=>{ setColor("red")}} className="px-4 py-2 rounded-full text-white shadow-xl" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={()=>{ setColor("green")}} className="px-4 py-2 rounded-full text-white shadow-xl" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={()=>{ setColor("blue")}} className="px-4 py-2 rounded-full text-white shadow-xl" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={()=>{ setColor("orange")}} className="px-4 py-2 rounded-full text-white shadow-xl" style={{backgroundColor: "orange"}}>Orange</button>
          <button onClick={()=>{ setColor("pink")}} className="px-4 py-2 rounded-full text-white shadow-xl" style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={()=>{ setColor("violet")}} className="px-4 py-2 rounded-full text-white shadow-xl" style={{backgroundColor: "violet"}}>Violet</button>
          <button onClick={()=>{ setColor("black")}} className="px-4 py-2 rounded-full text-white shadow-xl" style={{backgroundColor: "black"}}>Black</button>
          <button onClick={()=>{ setColor("purple")}} className="px-4 py-2 rounded-full text-white shadow-xl" style={{backgroundColor: "purple"}}>Purple</button>

        </div>
      </div>
    </div>
  )
}

export default App
