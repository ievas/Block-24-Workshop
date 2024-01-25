import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'
import puppyIcon from './assets/icons8-dog-64.png'


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // function handleClick(id){
  //     console.log("puppy id: ", id);
  // }

  let featuredPup = puppies.find((pup) => pup.id === featPupId)
  

  return (
    <div className="App">

      {
        puppies.map((puppy) => {
        return <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })
      }
      {featPupId && (
        <div className="card">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li><img src={puppyIcon} alt="dog icon from https://icons8.com/"/></li>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
    
        </div>
      )}
    </div>
    
  )
    
  }

export default App
