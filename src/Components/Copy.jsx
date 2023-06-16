import React from 'react'
import Data from "./List.json"
export default function Copy(props) {
  return (
    <div id='result-table'> 
      
       <table>
       <tr> <th>Roll</th> <th>Name</th> <th>Madrasah </th> <th>Result</th></tr>
       <tr><td>{props.Roll}</td> <td>{props.Name}</td> <td>{props.Madrasah}</td> <td>{props.result}</td></tr>
       </table>
        
    </div>
  )
}