import { useState } from 'react'
import './App.css'
import Copy from './Components/Copy'
import Data from "./Components/List.json"
function App() {
  const [count, setCount] = useState(0)
//  let Items = []
//  Items = Data.map((items) =><Copy Name = {items.name} Roll={items.Roll} Madrasah={items.Madrasah}/> )


//  for( let x = 0 ; x < Data.length ; x++){
//   Items.push(<Copy Name = {Data[x].name} Roll={Data[x].Roll} Madrasah={Data[x].Madrasah}/>)
//  }
  return (
    <>
    <h2 style={{"text-align": "center"}}> Result</h2>
    <table>
      <tr> <th>Roll</th> <th>Name</th> <th>Madrasah </th> <th>Result</th></tr></table>
      {Data.map((items , index) =><Copy key={index} Name = {items.name} Roll={items.Roll} Madrasah={items.Madrasah}  result={items.result}/> )}
       
       {/* {Data.map((items ,  index) =><Copy key={index} Name = {items.name} Roll={items.Roll} Madrasah={items.Madrasah}  result={items.result}/> )}
       {Data.map((items, index) =><Copy key={index} Name = {items.name} Roll={items.Roll} Madrasah={items.Madrasah} result={items.result}/> )} */}
      {/* <Copy Name = {Data[1].name} Roll={Data[1].Roll} Madrasah={Data[1].Madrasah}/> 
      <Copy Name = {Data[2].name} Roll={Data[2].Roll} Madrasah={Data[1].Madrasah}/> */}
      
    </>
  )
}

export default App
