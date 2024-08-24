import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [joke, setJoke] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJoke(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
     <p>JOKES: {joke.length} </p>
     {
      joke.map((joke,index)=>(
        <div key={joke.id}>
          <h3>Joke: {joke.id}</h3>
          <p>{joke.joke}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
