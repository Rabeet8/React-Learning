import React, {useState,useEffect, useRef } from 'react';

export function App() {
  const [name,setName] = useState(' ');
  const inputRef= useRef();
function focus (){
  inputRef.current.focus()
  }
  return (
    <div className='App'>
     <input ref={inputRef} value = {name} onChange={e => setName(e.target.value)}/>
     <h3>My name is {name}</h3>
     <button onClick = {focus}>Focus</button>
    </div>
  );
}

// Log to console
console.log('Hello console')
