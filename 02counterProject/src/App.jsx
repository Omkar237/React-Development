import { useState } from 'react';
import './App.css';



function App() {

  let [counter, setCounter] = useState(10);
  const addValue = ()=>{
    if(counter === 20){
      console.log("Maximum value 20")
    }else{
      setCounter(prevCounter => prevCounter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)

    }
  }
  const removeValue = ()=>{
    if(counter === 0){
      console.log("minimun value 0");
    }else{
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>React Project</h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove {counter} value</button>
    </>
  )
}

export default App
