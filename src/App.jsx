import { useState } from 'react'
import './App.css'
import Copy from './Components/Copy'
import Data from "./Components/List.json"
function App() {
  const [count, setCount] = useState(0)
const users = [
  {
    FullName:"imran ahmed",
    age:19,
    phone:[
      
       { home:"017......"},
       { office:"016...."}
       
      
    ]
  } 
]
  return (
    <>
     <h1>Nested Lists</h1>
    </>
  )
}

export default App
