import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username:"Aayushi",
    age: 24
  }

  let newArr = [1,2,3,4]
  return (
    <>
      <h1 className="text-3xl bg-green-400 font-bold underline">
        Tailwind test
      </h1>

      <Card username="chaiaurcode" someObje= {newArr} />
      <Card />
      
    </>
  )
}

export default App