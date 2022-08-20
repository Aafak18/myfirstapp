import React, {useState} from 'react';
import './App.css';
import {Message} from './message.js';

export default function App() {
  
  let [count, setCount] = useState(0)
  let [isMor, setMor] = useState(false)
  
  return (
    <div className={`box ${isMor? 'dayLight': ''}`} >
      <h1>Day time = {isMor? 'Morning' : 'Night' }</h1>
      <Message counter={count}/>
      <br/>
      <button onClick={()=> setCount(++count)}> Update counter </button>
      <button onClick={()=> setMor(!isMor)}>Change Daytime </button>
    </div>
  );
}

// export default App;