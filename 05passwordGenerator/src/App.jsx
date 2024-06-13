import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")
  const passReff = useRef(null)


  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){ str += "0123456789"}
    if(charAllowed) {str+= "@#$%%^&{}()"}

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    passReff.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className= " w-full  max-w-md mx-auto rounded-2xl px-4 my-3 text-orange-400 shadow-xl py-3 bg-gray-600">
        <h1 className=" text-center text-white font-bold text-2xl">Password Generator</h1>
        <div className=" flex shadow-xl rounded-lg overflow-hidden mt-2  bg-white mb-4">
          <input 
          type="text" 
          value={password}
          className=" outline-none w-full py-2 px-3"
          placeholder='Password'
          readOnly
          ref={passReff}
          />
          <button
          className=" outline-none bg-blue-600 text-white px-3 py-0.5 hover:bg-cyan-500"
          onClick={copyPasswordToClipBoard}
          >copy</button>
        </div>
        <div className=" flex text-sm gap-x-2">
          <div className= " flex items-center gap-x-1 ">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className= " cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor="label">Length: {length}</label>
          </div>
          <div className= "flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked = {numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="number">Numbers</label>  
          </div>
          <div className= "flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked = {charAllowed}
            id='numberInput'
            onChange={()=>{
              setCharAllowed((prev)=> !prev)
            }}
            />
            <label htmlFor="number">Characters</label>  
          </div>

        </div>
      </div>
    </>
  )
}

export default App
