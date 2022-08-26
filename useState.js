import React, {useState} from 'react'

export default function App() {
  
  const [counter, setCounter] = useState(0);
  
  //Basic code syntax of using usetate
  
  return (
    <div>
      <h1>{counter}</h1>
    
      <button onClick = {() => setCounter(counter + 1)}>Increment</button>

        // Here state will be updated by incrementing 1 

      <button onClick = {() => setCounter(counter - 1)}>Decrement</button>

        // Here state will be updated by decrementing 1 

    </div>

  )
}
