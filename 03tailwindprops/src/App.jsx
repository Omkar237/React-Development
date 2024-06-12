import './App.css'
import Card from './components/Card'

function App() {
const myObj = {
  name: "Omkar k",
  age: 21
}
  return (
    <>
      <h1 className='bg-green-400 rounded-xl font-mono mb-4'>Tailwind css inside</h1>
      <Card username="delba didi" btnText="Click me"/>
      <Card username="Santosh" btnText={"Click"}/>
    </>
  )
}

export default App
